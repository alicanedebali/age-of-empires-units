import { Table } from '../components';
import { useAppDispatch, useAppSelector } from '../store/middleware/hooks';
import { unitsActions, selectUnits } from '../store/units/units.slice';
import { useEffect, useState } from 'react';
import { UnitRawInterface, UnitsFilterInterface } from '../utils';
import { PageTitle } from '../components/PageTitle';

export const UnitsPage = () => {
  const dispatch = useAppDispatch();
  const { filteredUnits } = useAppSelector(selectUnits);

  const [unitList, setUnitList] = useState<UnitRawInterface[]>([]);

  useEffect(() => {
    dispatch(unitsActions.fetchAllisLoading());
  }, [dispatch]);

  useEffect(() => {
    setUnitList(filteredUnits);
  }, [filteredUnits]);

  // active when filter complate
  // const unitsFilter = (filter: UnitsFilterInterface) => {
  //   dispatch(unitsActions.filteredUnits(filter));
  // };
  return (
    <div>
      <PageTitle title={'Units Page'} />
      <Table
        data={unitList || []}
        columns={[
          { key: 'id', title: 'Id' },
          { key: 'name', title: 'Name' },
          { key: 'age', title: 'Age' },
          { key: 'cost', title: 'Cost' },
        ]}
      />
    </div>
  );
};
