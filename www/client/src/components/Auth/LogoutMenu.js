import React, { Component } from 'react';
import Dropdown from '../../lib/Dropdown/Dropdown';
import DropdownItem from '../../lib/Dropdown/DropdownItem';
import SocieteItemsDropdown from '../Societe/SocieteItemsDropdown';
import ProtectedComponent from './ProtectedComponent';
import { connect } from 'react-redux';
import { logout } from './actions';

class LogoutMenu extends Component {

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <Dropdown iconButton={"ellipsis-v"} name={"main-dropdown"}>
        <DropdownItem closeOnClick={"main-dropdown"} icon={"power-off"} label={"Se déconnecter"} onClick={() => this.logout()} />
        <DropdownItem closeOnClick={"main-dropdown"} icon={"bar-chart"} label={"Reporting"} to={"/"}/>
        <ProtectedComponent role={0}>
          <DropdownItem closeOnClick={"main-dropdown"} icon={"users"} label={"Utilisateurs"} onClick={() => alert('Page en cours de développement...!')}/>
        </ProtectedComponent>
        <ProtectedComponent role={1}>
          <DropdownItem closeOnClick={"main-dropdown"} icon={"cog"} label={"Paramètres"} to={'/parametres'} />
        </ProtectedComponent>
        <hr style={{margin: '.5rem 0'}}/>
        <DropdownItem label={"Sociétés"} header />
        <SocieteItemsDropdown />
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => ({
  access_token: state.auth.user.token,
});

export default connect(mapStateToProps, { logout })(LogoutMenu);
