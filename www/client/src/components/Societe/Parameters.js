import React from 'react';
import { connect } from 'react-redux';
import { changeConfig } from './actions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import './style.css';

const classes = {
  containerWithMarginTop: {
    marginTop: '56px',
  },
};

class Parameters extends React.Component {

  state = {
    background_color: null,
    name: null,
    shouldUpdate: true,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.shouldUpdate || state.id !== props.current_societe.id) {
      return {
        ...props.current_societe,
        shouldUpdate: true,
      };
    }
    //
    return null;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      shouldUpdate: false,
    },
      //
      () => this.props.changeConfig(this.state)
    );
  }

  render() {
    const { current_societe } = this.props;
    document.getElementById('META_NAME_CONTENT').setAttribute('content', current_societe.background_color);

    const style = {
      input: {
        borderColor: current_societe.background_color,
      },
    }

    return (
      <div style={classes.containerWithMarginTop}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Inside the wrapper container */}
              <input
                type="text"
                className="mb-2"
                value={this.state.name}
                id={"societe-name"}
                name={"name"}
                style={style.input}
                onChange={(e) => this.handleChange(e)}
              />

              <div className="text-muted mb-2">
                <span className="mb-2">Choix de la couleur de la société</span>
                <input
                  type="color"
                  className="form-control"
                  name={"background_color"}
                  value={this.state.background_color}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current_societe: state.societes.current_societe,
});

export default connect(mapStateToProps, { changeConfig })(Parameters);
