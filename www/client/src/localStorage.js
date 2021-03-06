/* The localStorage.js file make the data persistent within the local storage */

export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('alfredfm.ef595dd49g4ergr');
    if (serializedState === null) {
      return undefined;
    }
    let objectState = JSON.parse(serializedState);
    if (objectState.auth) {
      objectState.auth.confirmed = false;
    }
    const state = objectState;
    return state;
    // return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('alfredfm.ef595dd49g4ergr', serializedState);
  } catch {
    // ignore write errors
  }
}
