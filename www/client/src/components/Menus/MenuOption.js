import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';

class MenuOption extends Component {

  render() {
    return (
      <div>
        { this.props.children }
        <Popover
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          The content of the Popover.
        </Popover>
      </div>
    );
  }
}

export default MenuOption;
