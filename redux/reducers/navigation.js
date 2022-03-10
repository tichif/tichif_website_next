import { TOGGLE_NAVIGATION } from '../constants/navigation';

export const navigationReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return {
        active: action.payload,
      };
    default:
      return state;
  }
};
