import { reducer as DateEventReducer } from './DateEventStore/reducers';
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  dateEvent: DateEventReducer,
});
