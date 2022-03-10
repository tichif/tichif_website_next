import { combineReducers } from 'redux';

import { navigationReducer } from './navigation';
import { contactReducer } from './contact';

const reducers = combineReducers({
  navigation: navigationReducer,
  contact: contactReducer,
});

export default reducers;
