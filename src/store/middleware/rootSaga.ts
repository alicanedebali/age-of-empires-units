import { all, fork } from 'redux-saga/effects';

import unitsWatcherSaga from '../units/units.saga';

export function* rootSaga(): any {
  yield all([fork(unitsWatcherSaga)]);
}

export default rootSaga;
