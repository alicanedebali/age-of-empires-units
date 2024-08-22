import { Table, PageTitle } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/middleware/hooks';
import { unitsActions, selectUnits } from '../../store/units/units.slice';
import { useEffect, useState } from 'react';
import { UnitRawInterface } from '../../utils';
import { UnitsFilter } from './components/UnitsFilter';
import { useNavigate } from 'react-router-dom';

export const UnitsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { filteredUnits } = useAppSelector(selectUnits);

  const [unitList, setUnitList] = useState<UnitRawInterface[]>([]);

  useEffect(() => {
    dispatch(unitsActions.fetchAllisLoading());
  }, [dispatch]);

  useEffect(() => {
    setUnitList(filteredUnits);
  }, [filteredUnits]);

  return (
    <div className="grid gap-y-4 ">
      <PageTitle title={'Units Page'} />
      <UnitsFilter />
      <Table<UnitRawInterface>
        data={unitList || []}
        columns={[
          { key: 'id', title: 'Id' },
          { key: 'name', title: 'Name' },
          { key: 'age', title: 'Age' },
          { key: 'cost', title: 'Cost' },
        ]}
        clickHandler={(e) => {
          navigate('/units/' + e.id);
        }}
      />
    </div>
  );
};
