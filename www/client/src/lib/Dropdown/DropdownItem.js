import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDropdown } from './actions';
import { Link } from 'react-router-dom';
import RippleEffect from '../Ripple/RippleEffect';
import './style.css';

class DropdownItem extends Component {
  onClick() {
    const { onClick, closeOnClick } = this.props;
    //
    onClick();
    //
    if (closeOnClick) this.props.closeDropdown(this.props.closeOnClick);
  }

  render() {
    return (
      <>
        {
          this.props.to &&
            <RippleEffect className={"ellipsis"}>
              <Link
                className={"dropdown--link-item ellipsis d-flex align-items-center"}
                to={this.props.to}
                onClick={this.props.closeOnClick?() => this.props.closeDropdown(this.props.closeOnClick):null}
              >
                {
                  this.props.icon &&
                    <i className={"fa mr-2 fa-"+this.props.icon}></i>
                }
                <span className="ellipsis">
                  {this.props.label}
                </span>
              </Link>
            </RippleEffect>
        }
        {
          this.props.header &&
            <div className={"dropdown--link-header"}>{this.props.label}</div>
        }
        {
          (!this.props.header && !this.props.to) &&
            <RippleEffect>
              <a className={"d-flex align-items-center dropdown--link-item"+(this.props.iconSuccess?' justify-content-between':'')} onClick={() => this.onClick()}>
                {
                  this.props.icon &&
                    <i className={"fa mr-2 fa-"+this.props.icon}></i>
                  }
                <span className="ellipsis">
                  {this.props.label}
                </span>
                {
                  this.props.iconSuccess &&
                  <i className={"fa text-success ml-2 fa-check"}></i>
                }
              </a>
            </RippleEffect>
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  dropdown: state.dropdowns,
});

export default connect(mapStateToProps, { closeDropdown })(DropdownItem);
