import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../public/img/logo-white.png';
// import logo from '../../public/img/logo.png';
import { confs } from '../../conf';
import LogoutMenu from '../Auth/LogoutMenu';

const { PRIMARY_BG } = confs;


class Appbar extends Component {

  render() {

    const style = {
      appbar: {
        position: 'fixed',
        width: '100%',
        zIndex: '10',
        top: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '56px',
        padding: '1rem .5rem',
        backgroundColor: this.props.current_societe.background_color,
        color: 'white',
        fontSize: '1.2rem',
        boxShadow: '0 5px 5px 0 rgba(0,0,0,.125)',
      },
      logo: {
        height: '30px',
        width: 'auto',
        marginLeft: '.5rem',
      },
      subtitle: {
        fontSize: '.8rem',
      },
    };

    const { firstname, lastname } = this.props.auth.user;
    return (
      <div style={style.appbar}>
        <div className={"d-flex align-items-center ellipsis"}>
          <Link to={"/"}>
            <img style={style.logo} src={logo} alt=""/>
          </Link>
          <div className={"px-3 ellipsis"}>
            <div className={"ellipsis"}>
              <span className="ellipsis">{this.props.current_societe.name}</span>
            </div>
            <div style={style.subtitle}>
              {firstname} {lastname}
            </div>
          </div>
        </div>
        <div className={"d-flex"}>
          <LogoutMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  current_societe: state.societes.current_societe,
});

export default connect(mapStateToProps, { })(Appbar);
