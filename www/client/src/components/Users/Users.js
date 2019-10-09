import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const classes = {
  containerWithMarginTop: {
    marginTop: '56px',
  },
};

class Users extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { fetching, users } = this.props.users;

    //
    if (fetching || !users) return <LoadingComponent />

    return (
      <div style={classes.containerWithMarginTop}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Inside the wrapper container */}
              

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(Users);
