import React from 'react';
import Appbar from '../components/Headers/Appbar';
import Users from '../components/Users/Users';

class UsersPage extends React.Component {
  render() {
    return (
      <>
        <Appbar />
        <Users />
      </>
    );
  }
}

export default UsersPage;
