// DUCKS pattern
import {
  createAction,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../middleware/config.store';
import { type CostInterface, type UnitRawInterface } from '../../types';

export interface UnitState {
  units: UnitRawInterface[];
  filteredUnits: UnitRawInterface[];
  selectedUnit?: UnitRawInterface;
  loading: boolean;
  error: string;
}

const initialState: UnitState = {
  units: [],
  filteredUnits: [],
  selectedUnit: undefined,
  loading: false,
  error: '',
};

// slice
export const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    fetchAllisLoading(state) {
      state.loading = true;
    },
    fetchAllSucceeded(state, action: PayloadAction<UnitRawInterface[]>) {
      state.units = action.payload;
      state.filteredUnits = action.payload;
      state.loading = false;
    },
    fetchAllFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    filteredUnits(state, action: PayloadAction<CostInterface>) {
      const filtered = state.units.filter(
        (unit: UnitRawInterface) =>
          (!action.payload.Wood || unit.cost.Wood <= action.payload.Wood) &&
          (!action.payload.Gold || unit.cost.Gold <= action.payload.Gold) &&
          (!action.payload.Food || unit.cost.Food <= action.payload.Food),
      );
      state.filteredUnits = filtered;
      state.loading = false;
    },
    selectedUnits(state, action: PayloadAction<number | undefined>) {
      const selected = state.units.find(
        (unit: UnitRawInterface) => unit.id === action.payload,
      );
      state.selectedUnit = selected;
      state.loading = false;
    },
  },
});

// Actions
export const unitsActions = {
  fetchAll: createAction(`${unitsSlice.name}`),
  fetchAllisLoading: unitsSlice.actions.fetchAllisLoading,
  fetchAllSucceeded: unitsSlice.actions.fetchAllSucceeded,
  fetchAllFailure: unitsSlice.actions.fetchAllFailure,
  filteredUnits: unitsSlice.actions.filteredUnits,
  selectedUnits: unitsSlice.actions.selectedUnits,
};

// Selectors
export const selectUnits = (state: RootState): UnitRawInterface[] => {
  return state.units;
};

export default unitsSlice.reducer;
