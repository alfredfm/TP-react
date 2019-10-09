import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import ProtectedComponent from '../Auth/ProtectedComponent';
import { numberWithSpaces, curdate, getFrDate } from '../../utils';
import Dropdown from '../../lib/Dropdown/Dropdown';
import DropdownItem from '../../lib/Dropdown/DropdownItem';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import SocieteItemsDropdown from './SocieteItemsDropdown';
import VRPSelector from './VRPSelector';
import { fetchReporting, toggleMode, selectVRP } from './actions';
import { connect } from 'react-redux';
import './style.css';

const classes = {
  factures: {
    color: '#218838',
  },
  bl_non_factures: {
    color: '#dea808',
  },
  avoirs: {
    color: '#dc3545',
  },
  ca_non_commercial: {
    color: '#0c5460',
  },
}
const TableReporting = ({ reporting, style, details, has_vrp_selected, societes }) => (
  <table className="table table-bordered my-0" >
    <thead>
      <tr>
        <th scope="col" style={style.header}></th>
        <th className={"row-cell ellipsis text-center"} style={style.header} scope="col">C.A {!(reporting.fetching_reporting) && reporting.previous_year}</th>
        <th className={"row-cell ellipsis text-center"} style={style.header} scope="col">C.A {!(reporting.fetching_reporting) && reporting.current_year}</th>
        <th className={"row-cell ellipsis text-center"} style={style.header} scope="col">Diff. C.A (+/-)</th>
        <th className={"row-cell ellipsis text-center"} style={style.header} scope="col">Diff. C.A (%)</th>
      </tr>
    </thead>
    <tbody>
      {
        reporting.table && reporting.table.months.map((row, key) => (
          <tr key={key}>
            <th className={"row-cell ellipsis d-flex justify-content-between "} scope="row">
              {row.name}
              <i className={"fa fa-long-arrow-right ml-3 "+(row.diff_amount>0?'text-success up':'text-danger down')}></i>
            </th>
            <td className={"row-cell text-right ellipsis"+(row.diff_amount<0?' text-danger ':'')}>
              {
                details &&
                <>
                  <div>
                    <small style={classes.factures}>{numberWithSpaces(row.previous_ca.factures||0)} <small> €</small></small>
                  </div>
                  <div>
                      <small style={classes.avoirs}>{numberWithSpaces(row.previous_ca.avoirs||0)} <small> €</small></small>
                  </div>
                  <div>
                    <small style={classes.bl_non_factures}>{numberWithSpaces(row.previous_ca.bl_non_factures||0)} <small> €</small></small>
                  </div>
                    {
                      (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                        <div>
                          <small style={classes.ca_non_commercial}>{numberWithSpaces(row.previous_ca.ca_non_commercial||0)} <small> €</small></small>
                        </div>
                    }
                </>
              }
              {numberWithSpaces(row.previous_ca.total||0)} <small> €</small>
            </td>
            <td className={"row-cell text-right ellipsis"+(row.diff_amount<0?' text-danger ':'')}>
              {
                details &&
                <>
                  <div>
                    <small style={classes.factures}>{numberWithSpaces(row.current_ca.factures||0)} <small> €</small></small>
                  </div>
                  <div>
                      <small style={classes.avoirs}>{numberWithSpaces(row.current_ca.avoirs||0)} <small> €</small></small>
                  </div>
                  <div>
                    <small style={classes.bl_non_factures}>{numberWithSpaces(row.current_ca.bl_non_factures||0)} <small> €</small></small>
                  </div>
                    {
                      (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                        <div>
                          <small style={classes.ca_non_commercial}>{numberWithSpaces(row.current_ca.ca_non_commercial||0)} <small> €</small></small>
                        </div>
                    }
                </>
              }
              {numberWithSpaces(row.current_ca.total||0)} <small> €</small>
            </td>
            <td className={"row-cell vertical-align-bottom text-right ellipsis"+(row.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(row.diff_amount)} <small> €</small></td>
            <td className={"row-cell vertical-align-bottom text-right ellipsis"+(row.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(row.diff_rate)} <small> %</small></td>
          </tr>
        ))
      }
      {/* FROM JANUARY SECTION */}
      <tr>
        <th className={"row-cell ellipsis d-flex justify-content-between "} scope="row">
          {reporting.table.from_january.name}
          <i className={"fa fa-long-arrow-right ml-3 "+(reporting.table.from_january.diff_amount>0?'text-success up':'text-danger down')}></i>
        </th>
        <td className={"row-cell text-right ellipsis"+(reporting.table.from_january.diff_amount<0?' text-danger ':'')}>
          {
            details &&
            <>
              <div>
                <small style={classes.factures}>{numberWithSpaces(reporting.table.from_january.previous_ca.factures||0)} <small> €</small></small>
              </div>
              <div>
                  <small style={classes.avoirs}>{numberWithSpaces(reporting.table.from_january.previous_ca.avoirs||0)} <small> €</small></small>
              </div>
              <div>
                <small style={classes.bl_non_factures}>{numberWithSpaces(reporting.table.from_january.previous_ca.bl_non_factures||0)} <small> €</small></small>
              </div>
                {
                  (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                    <div>
                      <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.table.from_january.previous_ca.ca_non_commercial||0)} <small> €</small></small>
                    </div>
                }
            </>
          }
          {numberWithSpaces(reporting.table.from_january.previous_ca.total)} <small> €</small>
        </td>
        <td className={"row-cell text-right ellipsis"+(reporting.table.from_january.diff_amount<0?' text-danger ':'')}>
          {
            details &&
            <>
              <div>
                <small style={classes.factures}>{numberWithSpaces(reporting.table.from_january.current_ca.factures||0)} <small> €</small></small>
              </div>
              <div>
                  <small style={classes.avoirs}>{numberWithSpaces(reporting.table.from_january.current_ca.avoirs||0)} <small> €</small></small>
              </div>
              <div>
                <small style={classes.bl_non_factures}>{numberWithSpaces(reporting.table.from_january.current_ca.bl_non_factures||0)} <small> €</small></small>
              </div>
                {
                  (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                    <div>
                      <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.table.from_january.current_ca.ca_non_commercial||0)} <small> €</small></small>
                    </div>
                }
            </>
          }
          {numberWithSpaces(reporting.table.from_january.current_ca.total||0)} <small> €</small>
        </td>
        <td className={"row-cell vertical-align-bottom text-right ellipsis"+(reporting.table.from_january.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(reporting.table.from_january.diff_amount)} <small> €</small></td>
        <td className={"row-cell vertical-align-bottom text-right ellipsis"+(reporting.table.from_january.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(reporting.table.from_january.diff_rate)} <small> %</small></td>
      </tr>
      {/* ON THIS MONTH SECTION */}
      <tr>
        <th className={"row-cell ellipsis d-flex justify-content-between "} scope="row">
          {reporting.table.on_this_month.name}
          <i className={"fa fa-long-arrow-right ml-3 "+(reporting.table.on_this_month.diff_amount>0?'text-success up':'text-danger down')}></i>
        </th>
        <td className={"row-cell text-right ellipsis"+(reporting.table.on_this_month.diff_amount<0?' text-danger ':'')}>
          {
            details &&
            <>
              <div>
                <small style={classes.factures}>{numberWithSpaces(reporting.table.on_this_month.previous_ca.factures||0)} <small> €</small></small>
              </div>
              <div>
                  <small style={classes.avoirs}>{numberWithSpaces(reporting.table.on_this_month.previous_ca.avoirs||0)} <small> €</small></small>
              </div>
              <div>
                <small style={classes.bl_non_factures}>{numberWithSpaces(reporting.table.on_this_month.previous_ca.bl_non_factures||0)} <small> €</small></small>
              </div>
                {
                  (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                    <div>
                      <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.table.on_this_month.previous_ca.ca_non_commercial||0)} <small> €</small></small>
                    </div>
                }
            </>
          }
          {numberWithSpaces(reporting.table.on_this_month.previous_ca.total||0)} <small> €</small>
        </td>
        <td className={"row-cell text-right ellipsis"+(reporting.table.on_this_month.diff_amount<0?' text-danger ':'')}>
          {
            details &&
            <>
              <div>
                <small style={classes.factures}>{numberWithSpaces(reporting.table.on_this_month.current_ca.factures||0)} <small> €</small></small>
              </div>
              <div>
                  <small style={classes.avoirs}>{numberWithSpaces(reporting.table.on_this_month.current_ca.avoirs||0)} <small> €</small></small>
              </div>
              <div>
                <small style={classes.bl_non_factures}>{numberWithSpaces(reporting.table.on_this_month.current_ca.bl_non_factures||0)} <small> €</small></small>
              </div>
                {
                  (!has_vrp_selected && societes.current_societe.codsit == '1') &&
                    <div>
                      <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.table.on_this_month.current_ca.ca_non_commercial||0)} <small> €</small></small>
                    </div>
                }
            </>
          }
          {numberWithSpaces(reporting.table.on_this_month.current_ca.total||0)} <small> €</small>
        </td>
        <td className={"row-cell vertical-align-bottom text-right ellipsis"+(reporting.table.on_this_month.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(reporting.table.on_this_month.diff_amount)} <small> €</small></td>
        <td className={"row-cell vertical-align-bottom text-right ellipsis"+(reporting.table.on_this_month.diff_amount<0?' text-danger ':'')}>{numberWithSpaces(reporting.table.on_this_month.diff_rate)} <small> %</small></td>
      </tr>
    </tbody>
  </table>
)

class Reporting extends React.Component {
  state = {
    current_societe: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.societes.current_societe && (props.societes.current_societe.id !== state.current_societe.id)) {
      props.fetchReporting({codvrp: props.societes.selected_vrp});
      document.getElementById('META_NAME_CONTENT').setAttribute('content', props.societes.current_societe.background_color);
      return {
        current_societe: props.societes.current_societe,
      };
    }
    return null;
  }

  onChange(e) {
    const params = {
      codvrp: e.target.value,
    };
    //
    this.props.selectVRP(e.target.value);
    this.props.fetchReporting(params);
  }

  render() {


    const style = {
      container: {
        background: 'white',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        boxShadow: '2px 3px 7px 0 rgba(0,0,0,.225)',
        position: 'relative',
      },
      relative: {
        position: 'relative',
      },
      header: {
        background: this.props.societes.current_societe.background_color,
        color: 'white',
        padding: '1rem',
        position: 'relative',
      },
      title: {
        fontSize: '1.7rem',
        padding: '.5rem 0',
        fontWeight: '100',
        color: 'rgba(0,0,0,.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      daily_ca: {
        background: 'white',
        padding: '1rem',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        boxShadow: '2px 3px 7px 0 rgba(0,0,0,.225)',
      },
      legend: {
        display: 'flex',
        // flexDirection: 'column',
      },
    };

    const { reporting } = this.props;

    console.log('CODVRP', this.props.societes.selected_vrp);

    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div>
                <ProtectedComponent role={1}>
                  <VRPSelector
                    onChange={(e) => this.onChange(e)}
                  />
                </ProtectedComponent>
              </div>
              <div style={style.title}>
                <div>
                  Reporting
                  <div style={{fontSize: '.9rem'}}>
                    <small>
                      <em>{ this.props.reporting.synchronisation_infos }</em>
                    </small>
                  </div>
                </div>
                <Switch
                  checked={this.props.societes.details_mode}
                  onChange={() => this.props.toggleMode()}
                  value="details"
                />
              </div>
            </div>
            <div className="col-lg-10">
            {
              (this.props.societes.details_mode) &&
                <>
                  <em className="text-muted">Mode détaillé</em>
                  <div style={style.legend}>
                    <small className={"mr-2 ellipsis"} style={{...classes.factures, fontSize: '.8rem'}}>
                      Factures*
                    </small>
                    <small className={"mr-2 ellipsis"} style={{...classes.avoirs, fontSize: '.8rem'}}>
                      Avoirs*
                    </small>
                    <small className={"mr-2 ellipsis"} style={{...classes.bl_non_factures, fontSize: '.8rem'}}>
                      B.Ls non facturés*
                    </small>
                    {
                      (this.props.societes.selected_vrp == '' && this.props.societes.current_societe.codsit == '1') &&
                        <small className={"mr-2 ellipsis"} style={{...classes.ca_non_commercial, fontSize: '.8rem'}}>
                          Dont non commercial*
                        </small>
                    }
                  </div>
                </>
              }
              {
                this.props.societes.fetching_reporting &&
                  <div className="px-3 py-3">
                    <LoadingComponent color={this.props.societes.current_societe.background_color} />
                  </div>
              }
              <div className={"table-responsive"} style={style.container}>
              {
                (reporting && !this.props.societes.fetching_reporting && reporting.table) &&
                  <TableReporting
                    details={this.props.societes.details_mode}
                    reporting={reporting}
                    style={style}
                    societes={this.props.societes}
                    has_vrp_selected={(this.props.societes.selected_vrp != '')}
                  />
              }
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {
                (reporting && !this.props.societes.fetching_reporting && reporting.daily_ca)&&
                  <div style={style.daily_ca}>

                    <div className="text-center text-muted" style={{fontSize: '1.2rem'}}>
                      Aujourd'hui {" "}
                      <small>
                        <small>
                          (le {getFrDate(curdate())})
                        </small>
                      </small>
                    </div>

                    <div className={"text-center d-flex justify-content-between align-items-end"}>
                      <div className={"ellipsis"}>Commandes</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>
                        {
                          (this.props.societes.details_mode) &&
                            <>
                              {
                                (this.props.societes.selected_vrp == '' && this.props.societes.current_societe.codsit == '1') &&
                                  <div>
                                    <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.daily_commandes.ca_non_commercial||0)} <small> €</small></small>
                                  </div>
                              }
                            </>
                        }
                        {numberWithSpaces(reporting.daily_commandes.total||0)} <span style={{fontSize: '.8rem'}}> €</span>
                      </div>
                    </div>

                    {
                      this.props.societes.details_mode &&
                        <div className="d-flex justify-content-end">
                          <div style={{flex: '.33'}}>
                            <hr/>
                          </div>
                        </div>
                    }

                    <div className={"text-center d-flex justify-content-between align-items-end"}>
                      <div className={"ellipsis"}>C.A</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>
                        {
                          (this.props.societes.details_mode) &&
                            <>
                              <div>
                                <small style={classes.factures}>{numberWithSpaces(reporting.daily_ca.factures||0)} <small> €</small></small>
                              </div>
                                <div>
                                  <small style={classes.avoirs}>{numberWithSpaces(reporting.daily_ca.avoirs||0)} <small> €</small></small>
                                </div>
                              <div>
                                <small style={classes.bl_non_factures}>{numberWithSpaces(reporting.daily_ca.bl_non_factures||0)} <small> €</small></small>
                              </div>
                                {
                                  (this.props.societes.selected_vrp == '' && this.props.societes.current_societe.codsit == '1') &&
                                    <div>
                                      <small style={classes.ca_non_commercial}>{numberWithSpaces(reporting.daily_ca.ca_non_commercial||0)} <small> €</small></small>
                                    </div>
                                }
                            </>
                        }
                        {numberWithSpaces(reporting.daily_ca.total||0)} <span style={{fontSize: '.8rem'}}> €</span>
                      </div>
                    </div>

                    <hr/>

                    <div className="text-center text-muted" style={{fontSize: '1.2rem'}}>{reporting.this_month.name}</div>
                    <div className={"text-center d-flex justify-content-between align-items-end"}>
                      <div className={"ellipsis"}>C.A {reporting.this_month.year}</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.this_month.previous_year||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>Portefeuille à livrer</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.this_month.a_livrer||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>Projection du C.A</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.this_month.projection_ca||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>

                    <hr/>

                    <div className="text-center text-muted" style={{fontSize: '1.2rem'}}>{reporting.next_month_1.name}</div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>C.A {reporting.next_month_1.year}</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.next_month_1.previous_year||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>Portefeuille à livrer</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.next_month_1.a_livrer||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>

                    <hr/>

                    <div className="text-center text-muted" style={{fontSize: '1.2rem'}}>{reporting.next_month_2.name}</div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>C.A {reporting.next_month_2.year}</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.next_month_2.previous_year||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>
                    <div className={"text-center d-flex justify-content-between align-items-end my-2"}>
                      <div className={"ellipsis"}>Portefeuille à livrer</div>
                      <div style={{fontSize: '1.2rem', flex: '1', textAlign: 'right'}}>{numberWithSpaces(reporting.next_month_2.a_livrer||0)}<span style={{fontSize: '.8rem'}}> €</span></div>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  societes: state.societes,
  reporting: state.societes.reporting,
});

export default connect(mapStateToProps, { fetchReporting, toggleMode, selectVRP })(Reporting);
