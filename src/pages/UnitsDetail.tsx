import { useParams } from 'react-router-dom';
import { List, PageTitle } from '../components';
import { useAppDispatch, useAppSelector } from '../store/middleware/hooks';
import { unitsActions, selectUnits } from '../store/units/units.slice';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ListInterface, UnitRawInterface } from '../utils';

export const UnitDetailPage = () => {
  const { unitId } = useParams();
  const dispatch = useAppDispatch();
  const { selectedUnit, unitsData } = useAppSelector(selectUnits);

  const [units, setUnits] = useState<UnitRawInterface[] | undefined>();
  const [unitList, setUnitList] = useState<ListInterface[]>([]);

  useLayoutEffect(() => {
    if (!unitsData?.length) {
      dispatch(unitsActions.fetchAllisLoading());
    }
  }, []);

  useEffect(() => {
    if (
      unitsData?.length &&
      JSON.stringify(unitsData) != JSON.stringify(units)
    ) {
      dispatch(unitsActions.selectedUnits((unitId || 0) as number));
      setUnits(unitsData);
    }
  }, [unitsData]);

  useEffect(() => {
    if (selectedUnit) {
      const {
        id,
        description,
        name,
        age,
        cost,
        build_time,
        reload_time,
        hit_points,
        attack,
        accuracy,
      } = selectedUnit;
      const unitListData: ListInterface[] = [
        { title: 'ID', value: id },
        { title: 'Name', value: name },
        { title: 'Description', value: description },
        { title: 'Min. Required Age', value: age },
        { title: 'Wood Cost', value: cost.Wood },
        { title: 'Food Cost', value: cost.Food },
        { title: 'Gold Cost', value: cost.Gold },
        { title: 'Build Time', value: build_time },
        { title: 'Reload Time', value: reload_time },
        { title: 'Hit Points', value: hit_points },
        { title: 'Attack', value: attack },
        { title: 'Accuracy', value: accuracy },
      ];
      setUnitList(unitListData);
    }
  }, [selectedUnit]);
  console.log(selectedUnit);

  return (
    <div className="flex flex-col items-center gap-y-4">
      <PageTitle title="units detail page" />
      <List listData={unitList} />
    </div>
  );
};
