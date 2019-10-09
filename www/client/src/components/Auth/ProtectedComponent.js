import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render () {
    //
    const { role, auth, children } = this.props;
    //
    if (!((auth.user) && auth.user.role <= role)) return null;
    //
    return children;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { })(ProtectedRoute);
