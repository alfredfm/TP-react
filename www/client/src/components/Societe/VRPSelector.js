import React from 'react';
import SnapChatLoader from '../LoadingComponent/SnapChatLoader';
import { connect } from 'react-redux';
import { fetchVRP } from './actions';

class VRPSelector extends React.Component {

  componentDidMount() {
    this.props.fetchVRP();
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.current_societe.id !== nextProps.current_societe.id) {
      this.props.fetchVRP();
    }
  }

  render() {

    const { vrps, current_societe, selected_vrp, onChange } = this.props;

    return (
      <div className="label--form d-flex" style={{position: 'relative'}}>
        {
          this.props.fetching_vrps &&
            <SnapChatLoader color={current_societe.background_color}/>
        }
        <select
          value={selected_vrp}
          name="codvrp"
          className={"form-control"}
          onChange={(e) => onChange(e)}
          disabled={this.props.fetching_vrps || (vrps.length == 0)}
        >
          <option value={''}>
            {
              vrps.length == 0 &&
                "Pas de VRP"
            }
            {
              vrps.length > 0 &&
                "< Aucun VRP séléctionné >"
            }
          </option>
          {
            vrps && vrps.map(vrp => (
              <option value={(vrp.codvrp === '' || !vrp.codvrp) ? vrp.codope : vrp.codvrp}>{vrp.nomope}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  current_societe: state.societes.current_societe,
  vrps: state.societes.vrps,
  fetching_vrps: state.societes.fetching_vrps,
  selected_vrp: state.societes.selected_vrp,
});

export default connect(mapStateToProps, { fetchVRP })(VRPSelector);
