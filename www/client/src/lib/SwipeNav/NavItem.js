import React, { Component } from 'react';

class NavItem extends Component {
  render() {

    const { icon, title, animated, onClick, active } = this.props;


    return (
      <div
        className={"nav-item--c"+(active?' active':'')}
        onClick={(index) => onClick(index)}
      >
        {icon && <i className={("fa fa-"+icon)+(animated?' animated':'')+(!title?' only':'')}></i>}
        {title && <span className={"nav-item--title"}>{title}</span>}
      </div>
    );
  }
}

export default NavItem;
