import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { unitsService } from '../services';
import { type UnitRawInterface } from '../../utils';
import { unitsActions } from './units.slice';

// Worker Sagas
export function* onGetUnits(): SagaIterator {
  try {
    const posts: UnitRawInterface[] = yield call(unitsService);
    yield put(unitsActions.fetchAllSucceeded(posts));
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put(unitsActions.fetchAllFailure(e.message.toString()));
    }
  }
}

// Watcher Saga
function* unitsWatcherSaga(): SagaIterator {
  yield takeEvery(unitsActions.fetchAllisLoading.type, onGetUnits);
}

export default unitsWatcherSaga;
