import { fork } from 'redux-saga/effects'
import dateEventList from './DateEventStore/sagas';

export default function* root() {
  yield fork(dateEventList);
}