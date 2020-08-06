import { reducer as DateEventReducer } from './DateEvent/reducers';
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  dateEvent: DateEventReducer,
});
