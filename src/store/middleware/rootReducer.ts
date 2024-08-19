import { type Action, combineReducers } from '@reduxjs/toolkit';
import unitsReducer from '../units/units.slice';

const appReducer = combineReducers({
  units: unitsReducer,
});

const rootReducer = (
  state: any,
  action: Action,
): ReturnType<typeof appReducer> => {
  return appReducer(state, action);
};

export default rootReducer;
