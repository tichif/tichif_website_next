import { TOGGLE_NAVIGATION } from '../constants/navigation';

export const toggleNavigation = (active) => (dispatch) => {
  dispatch({
    type: TOGGLE_NAVIGATION,
    payload: active,
  });
};
