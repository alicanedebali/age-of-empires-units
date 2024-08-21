import React, { memo, useEffect, useState } from 'react';
import { ColumnInterface, TableInterface, UnitRawInterface } from '../../types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { NoData } from '../NoData';

export const Table = memo(function Table(
  props: TableInterface<UnitRawInterface>,
) {
  const [columns, setColumns] = useState<ColumnInterface[]>([]);

  useEffect(() => {
    if (props.columns) {
      setColumns(props.columns);
    } else if (props.data.length) {
      setColumns(
        Object.keys(props.data[0]).map((key) => {
          return { key: key, title: key.toUpperCase() };
        }),
      );
    }
  }, [props]);
  return (
    <div className="relative overflow-x-auto">
      {props.data?.length ? (
        <table className="border-collapse border border-slate-400 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader columns={columns} />
          <tbody>
            {props.data.map((item) => (
              <React.Fragment key={item.id.toString()}>
                <TableRow
                  row={item}
                  columns={columns}
                  clickHandler={(e) =>
                    props?.clickHandler && props.clickHandler(e)
                  }
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <NoData />
      )}
    </div>
  );
});
