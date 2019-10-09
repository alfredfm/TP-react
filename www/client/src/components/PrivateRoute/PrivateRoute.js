import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

class PrivateRoute extends Component {

  render() {
    const { user, access_token, fetching_user } = this.props;
    if ((!user || !access_token) && fetching_user === false) {
      this.validation();
      return (<LoadingComponent />);
    }

    if (fetching_user === true) { return (<LoadingComponent />); }

    if (((!user || !access_token) && (fetching_user === null))) {
      return (<Redirect to={'/login'} />);
    }

    
  }

}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { login })(PrivateRoute);
