import React, { Component } from 'react';
import LayoutViews from '../lib/SwipeNav/LayoutViews';
import { confs } from '../conf';
import Appbar from '../components/Headers/Appbar';
import Reporting from '../components/Societe/Reporting';
import Fade from '@material-ui/core/Fade';
// retrieve primary color
const { PRIMARY_BG } = confs;

// navs
// const navs = [
//   {title: 'Tâches', icon: 'list-ul', animated: true},
//   {title: 'Actualités Doselec', icon: 'tint', animated: true},
// ];
// // views to inject
// const views = [
//   Todos,
//   Societe,
// ];

const style = {
  containerWithMarginTop: {
    marginTop: '56px',
  },
};

class Main extends Component {

  render() {
    return (
        <div style={style.containerWithMarginTop}>
          <Appbar />
          <Reporting />
        </div>
    );
  }
}

export default Main;
