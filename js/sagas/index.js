import { take, put, call, select } from 'redux-saga/effects';
import { OPEN_DRAWER } from '../actions/drawer';

function* logDrawer() {
  while(1) { // eslint-disable-line
    const action = yield take(OPEN_DRAWER);
    console.log('open');
  }
}

export default [
  logDrawer,
];
