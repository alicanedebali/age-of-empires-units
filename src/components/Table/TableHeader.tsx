import { memo } from 'react';
import { ColumnInterface } from '../../types';

export const TableHeader = memo(function TableHeader({
  columns,
}: {
  columns: ColumnInterface[];
}) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="border border-slate-300 px-6 py-3"
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
});
