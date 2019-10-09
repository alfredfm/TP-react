import React, { Component } from 'react';
import AuthRoute from './AuthRoute';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render () {
    const { role, auth } = this.props;

    if (!((auth.user && auth.user) && auth.user.role <= role)) return <Redirect to="/" />;

    return <AuthRoute {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { })(ProtectedRoute);
