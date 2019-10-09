export const REGISTER_DROPDOWN = 'REGISTER_DROPDOWN';
export const registerDropdown = (name) => ({
  type: REGISTER_DROPDOWN, payload: name,
});

export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const openDropdown = (name) => ({
  type: OPEN_DROPDOWN, payload: name
});

export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const closeDropdown = (name) => ({
  type: CLOSE_DROPDOWN, payload: name
});
