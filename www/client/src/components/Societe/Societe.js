import React from 'react';
import { connect } from 'react-redux';
import { fetchSociete } from './actions';
import banniere from '../../public/img/banniereHome.jpg';
import { confs } from '../../conf';
import { formatedText } from '../../utils';
import RippleEffect from '../../lib/Ripple/RippleEffect';

const { PRIMARY_BG, SITE_MARCHAND } = confs;

const style = {
  banniere: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachement: 'fixed',
    minHeight: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,0,0,.5) 30%, rgba(0,0,0,.25))',
  },
  content: {
    color: 'white',
    padding: '1rem',
    fontSize: '1.2rem'
  }
};

class Societe extends React.Component {
  state = {};

  fetchSocieteInfo() {
    const params = {
      access_token: this.props.auth.user.token,
      codsoc: this.props.auth.user.codsit,
    }
    this.props.fetchSociete(params);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.index === 1 && state.stop !== true) {
      const params = {
        access_token: props.auth.user.token,
        codsoc: props.auth.user.codsit,
      }
      props.fetchSociete(params);
      return {
        stop: true,
      }
    }
    if (props.index !== 1) {
      return { stop: false };
    }
    return null;
  }

  render() {
    const { societe } = this.props;
    const description = societe ? formatedText(societe.infos_to_do_liste) : '';
    return (
      <div style={{height: '100%'}}>
        {/* Banniere */}
        <div style={{
          ...style.banniere,
          backgroundImage: 'url('+banniere+')'
        }}>
          <div style={style.overlay}></div>

          {/*Societe content*/}
          {
            societe &&
              <div className={"container"}>
                <div className="row justify-content-center ">
                  <div className="col-md-8">
                    <div style={style.content}>
                      <span dangerouslySetInnerHTML={{__html: description}}></span>
                    </div>
                  </div>
                </div>
              </div>
          }

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.swipeViews.index,
  auth: state.auth,
  societe: state.societes.societe,
});

export default connect(mapStateToProps, { fetchSociete })(Societe);
