import { combineReducers } from 'redux';

import { navigationReducer } from './navigation';

const reducers = combineReducers({
  navigation: navigationReducer,
});

export default reducers;
