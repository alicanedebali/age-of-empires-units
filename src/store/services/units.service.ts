import { UnitRawInterface } from '../../types';

export async function unitsService(): Promise<UnitRawInterface[] | null> {
  return fetch('data/age-of-empires-units.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // fix undefined cost for filter
      const units: UnitRawInterface[] = res?.units?.map(
        (unit: UnitRawInterface) => {
          return {
            ...unit,
            cost: {
              Wood: unit.cost?.Wood || 0,
              Gold: unit.cost?.Gold || 0,
              Food: unit.cost?.Food || 0,
            },
          };
        },
      );
      return units;
    });
}
