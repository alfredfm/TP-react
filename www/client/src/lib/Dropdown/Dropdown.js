import React, { Component } from 'react';
import IconButton from '../IconButton/IconButton';
import DropdownItem from './DropdownItem';
import { connect } from 'react-redux';
import { registerDropdown, openDropdown, closeDropdown } from './actions';
import './style.css';

class Dropdown extends Component {
  state = {
    open: false,
  }
  // after component has been mounted
  componentDidMount() {
    // get given name by props
    const { name } = this.props;
    // register the dropdown
    this.props.registerDropdown(name);
  }

  render() {
    const { children, iconButton, items, name, header } = this.props;
    const open = this.props.dropdown[name];

    return (
      <>
        <div onClick={() => this.props.closeDropdown(name)} className={"dropdown-overlay--ilsduc"+(open===true?' active':'')}></div>
        <div className={"dropdown"+(open===true?' active':'')}>
          <IconButton icon={iconButton} onClick={() => this.props.openDropdown(name)} />
          <div ref={dd => this.dd = dd} className={"dropdown-content"+(open===true?' active':'')}>
            { children }
            {
              items && items.map((item) => (
                <DropdownItem {...item} clickOnClose={name} />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  dropdown: state.dropdowns,
})

export default connect(mapStateToProps, { registerDropdown, openDropdown, closeDropdown })(Dropdown);
