import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

export default {
  Reducers: combineReducers({
    auth: {},
  }),
  *Sagas() {
    return yield all([{}]);
  },
};
