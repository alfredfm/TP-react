import React from 'react';
import { changeSociete } from './actions';
import { connect } from 'react-redux';
import FullScreenLoader from '../LoadingComponent/FullScreenLoader';
import DropdownItem from '../../lib/Dropdown/DropdownItem';

class SocieteItemsDropdown extends React.Component {

  changeSociete(societe) {
    if (societe.id !== this.props.societes.current_societe.id) {
      this.props.changeSociete(societe);
    }
  }
  
  render() {
    const style = {
      loaderContainer: {
        position: 'relative',
      },
    };

    const { societes, current_societe, default_societe } = this.props.societes;

    return (
      <div style={style.loaderContainer}>
        {
          societes.map((societe, key) => (
            <DropdownItem
              key={key}
              label={societe.name}
              onClick={() => this.changeSociete(societe)}
              iconSuccess={(societe.id === current_societe.id)}
              closeOnClick={"main-dropdown"}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  societes: state.societes,
});

export default connect(mapStateToProps, { changeSociete })(SocieteItemsDropdown);
