import { PageTitle } from '../components';
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
      <PageTitle title="units detail page" />
    </div>
  );
};
