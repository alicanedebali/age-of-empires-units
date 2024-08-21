import { useEffect, useState } from 'react';
import { GroupButton, Range } from '../../../components';
import { UnitsFilterInterface } from '../../../utils';
import { unitsActions, useAppDispatch } from '../../../store';

export const UnitsFilter = () => {
  const dispatch = useAppDispatch();
  const agesList = ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'];
  const [filterParams, setFilterParams] = useState<UnitsFilterInterface>({
    age: undefined,
    Food: undefined,
    Gold: undefined,
    Wood: undefined,
  });
  useEffect(() => {
    dispatch(unitsActions.filteredUnits(filterParams));
  }, [filterParams]);

  const unitsFilter = (filter: {
    key: keyof UnitsFilterInterface;
    value: string | number | undefined;
  }) => {
    if (filterParams[filter.key] !== filter.value) {
      setFilterParams((prev) => {
        return { ...prev, [filter.key]: filter.value };
      });
    }
  };
  return (
    <div className="grid gap-y-2">
      <div>
        <h1 className="mb-2">Ages</h1>
        <GroupButton
          buttonList={agesList}
          clickHandler={({ name }) =>
            unitsFilter({
              key: 'age',
              value: name === 'All' ? undefined : name,
            })
          }
        />
      </div>

      <div>
        <h1 className="mb-2">Costs</h1>
        <Range
          title="Wood"
          rangeLimit={200}
          clickHandler={(e) => {
            unitsFilter({
              key: 'Wood',
              value: e.isActive ? e.value : undefined,
            });
          }}
        />
        <Range
          title="Food"
          rangeLimit={200}
          clickHandler={(e) => {
            unitsFilter({
              key: 'Food',
              value: e.isActive ? e.value : undefined,
            });
          }}
        />
        <Range
          title="Gold"
          rangeLimit={200}
          clickHandler={(e) => {
            unitsFilter({
              key: 'Gold',
              value: e.isActive ? e.value : undefined,
            });
          }}
        />
      </div>
    </div>
  );
};
