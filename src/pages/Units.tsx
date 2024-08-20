import { useAppDispatch, useAppSelector } from '../store/middleware/hooks';
import { unitsActions, selectUnits } from '../store/units/units.slice';
import { useEffect } from 'react';
export const UnitsPage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectUnits);
  useEffect(() => {
    dispatch(unitsActions.fetchAllisLoading());
    setTimeout(() => {
      dispatch(unitsActions.filteredUnits({ Wood: 10, Food: 10, Gold: 100 }));
    }, 1000);
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-3xl font-bold underline"> Welcome to units page</h1>
    </div>
  );
};
