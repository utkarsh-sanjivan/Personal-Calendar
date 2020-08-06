import { fork } from 'redux-saga/effects'
import dateEventList from './DateEvent/sagas';

export default function* root() {
  yield fork(dateEventList);
}