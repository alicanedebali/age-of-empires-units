import { useAppDispatch, useAppSelector } from '../store/middleware/hooks';
import { unitsActions, selectUnits } from '../store/units/units.slice';
import { useEffect } from 'react';
export const Main = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectUnits);
  //   console.log(data);
  useEffect(() => {
    dispatch(unitsActions.fetchAllisLoading());
    dispatch(unitsActions.selectedUnits());
    setTimeout(() => {
      dispatch(unitsActions.filteredUnits({ Wood: 10, Food: 10, Gold: 100 }));
    }, 1000);
  }, [dispatch]);
  return (
    <div className="container">
      Welcome to main page
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className={'spinner'}></div>
    </div>
  );
};
