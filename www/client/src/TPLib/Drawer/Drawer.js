import React from "react";
import { connect } from 'react-redux';
import { registerDrawer, closeDrawer, destroyDrawer } from './actions';
import PropTypes from 'prop-types';
import './style.css';

class Drawer extends React.Component {

    componentDidMount() {
        this.props.registerDrawer(this.props.name);
    }

    componentWillUnmount() {
        this.props.destroyDrawer(this.props.name);
    }

    render() {

        const { drawers, name, direction, children  } = this.props;

        if ( !drawers[name] ) return null;

        return (
            <div
                className={"ilsduc--drawer "+ ((drawers[name].open||false)===true ? 'open ':'') + (direction||"left")}
            >
                <div
                    className={"backdrop"}
                    onClick={() => this.props.closeDrawer(name)}
                ></div>
                <div
                    className={"drawer"}
                >
                    { children }
                </div>
            </div>
        )
    }
}

Drawer.propTypes = {
    name: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
};

const mapStateToProps = (state) => ({
    drawers: state.drawers,
});

export default connect(mapStateToProps, { registerDrawer, closeDrawer, destroyDrawer })(Drawer);