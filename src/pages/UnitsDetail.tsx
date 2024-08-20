import { useAppDispatch, useAppSelector } from '../store/middleware/hooks';
import { unitsActions, selectUnits } from '../store/units/units.slice';
import { useEffect } from 'react';
export const UnitDetailPage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectUnits);
  useEffect(() => {
    dispatch(unitsActions.selectedUnits());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Welcome to units detail page
      </h1>
    </div>
  );
};
