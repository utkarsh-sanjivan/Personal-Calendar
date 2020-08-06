import { reducer as DateEventReducer } from './DateEventStore/reducerse/reducers';
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  dateEvent: DateEventReducer,
});
