import {
  CONTACT_ERROR,
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
} from '../constants/contact';

export const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        loading: true,
      };
    case CONTACT_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload,
      };
    case CONTACT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
