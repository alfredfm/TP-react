import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, confirm } from './actions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Route, Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import RippleEffect from '../../lib/Ripple/RippleEffect';
import Slide from '@material-ui/core/Slide';
import { confs } from '../../conf';
import logoLarge from '../../public/img/logo-large-white.png';

import qs from 'qs';

const { PRIMARY_BG } = confs;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const style={
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: PRIMARY_BG,
  },
  button: {
    background: 'rgba(255, 255, 255, .3)',
    border: 'none',
    color: 'white',
    padding: '.5rem',
    borderRadius: '5px'
  },
}

class AuthRoute extends Component {
  state = {
    auth:  {},
  };

  componentWillMount() {
    const { token } = this.props.auth.user;

    if (token) {
      this.props.confirm();
    }
  }

  login() {
    this.props.login(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    const { confirmed, confirmFetching, fetching, user } = this.props.auth;
    const params = qs.parse(this.props.location.search.replace('?', ''));
    const { email, password } = this.state;
    document.getElementById('META_NAME_CONTENT').setAttribute('content', PRIMARY_BG);

    return (
      <>
        {
          confirmFetching &&
            <LoadingComponent />
        }
       {
          (!confirmFetching && confirmed) &&
            <Route {...this.props} />
       }
       {
         (!user.token || !confirmFetching) &&
           <Dialog
             fullScreen
             open={!confirmed}
             TransitionComponent={Transition}
           >
            <div style={style.container} id={"auth-login"}>
              <form className={"text-center"}>
                <img src={logoLarge} className={"img-fluid mb-4"} alt=""/>
                <input type="text" className={"form-control mb-2"} name="username" placeholder={"Identifiant"} defaultValue={email} onChange={(e) => this.handleChange(e)}/>
                 <input type="password" className={"form-control mb-2"} name="password" placeholder={"Mot de passe"} defaultValue={password} onChange={(e) => this.handleChange(e)}/>
                 <RippleEffect onClick={() => this.login()}>
                  <button disabled={fetching} type={"button"} style={style.button} className={"btn-block"}>{fetching===true?'Connexion ...':'Se connecter'}</button>
                 </RippleEffect>
               </form>
             </div>
           </Dialog>
       }
     </>

    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, confirm })(AuthRoute);
