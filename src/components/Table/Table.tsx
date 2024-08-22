import React, { useEffect, useState } from 'react';
import { ColumnInterface, TableInterface } from '../../utils';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { NoData } from '../NoData';

export function Table<T>(props: TableInterface<T>) {
  const [columns, setColumns] = useState<ColumnInterface<T>[]>([]);

  useEffect(() => {
    if (props.columns) {
      setColumns(props.columns);
    } else if (props.data.length) {
      setColumns(
        Object.keys({ ...props.data[0] } as keyof T).map((key) => {
          return { key: key, title: key.toUpperCase() };
        }) as ColumnInterface<T>[],
      );
    }
  }, [props]);
  return (
    <div className="relative overflow-x-auto mb-5">
      {props.data?.length ? (
        <table className="border-collapse border border-slate-400 w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <TableHeader columns={columns} />
          <tbody>
            {props.data.map((item) => (
              <React.Fragment key={JSON.stringify(item)}>
                <TableRow<T>
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
}
