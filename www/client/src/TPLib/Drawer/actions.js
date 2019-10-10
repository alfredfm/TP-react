export const REGISTER_DRAWER = 'REGISTER_DRAWER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const DESTROY_DRAWER = 'DESTROY_DRAWER';

export const registerDrawer = (name) => dispatch => dispatch({
    type: REGISTER_DRAWER,
    payload: name,
});

export const toggleDrawer = (name) => dispatch => dispatch({
    type: TOGGLE_DRAWER,
    payload: name,
});

export const openDrawer = (name) => dispatch => dispatch({
    type: OPEN_DRAWER,
    payload: name,
});

export const closeDrawer = (name) => dispatch => dispatch({
    type: CLOSE_DRAWER,
    payload: name,
});

export const destroyDrawer = (name) => dispatch => dispatch({
    type: DESTROY_DRAWER,
    payload: name,
});