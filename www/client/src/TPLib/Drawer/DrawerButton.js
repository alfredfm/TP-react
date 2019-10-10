import React from "react";
import { connect } from 'react-redux';
import { toggleDrawer, closeDrawer, openDrawer } from './actions';
import PropTypes from 'prop-types';
import './style.css';

class DrawerButton extends React.Component {
    render() {

        const { drawers, toggle, close, open, label } = this.props;

        const action = () => {
            if (close) return this.props.closeDrawer(close);
            if (open) return this.props.openDrawer(open);
            if (toggle) return this.props.toggleDrawer(toggle);
        }

        return (
            <button
                onClick={() => action()}
            >
                { label }
            </button>
        )
    }
}

DrawerButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    drawers: state.drawers,
});

export default connect(mapStateToProps, { toggleDrawer, closeDrawer, openDrawer })(DrawerButton);