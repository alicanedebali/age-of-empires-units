import { ColumnInterface } from '../../utils';

export function TableHeader<T>({ columns }: { columns: ColumnInterface<T>[] }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key.toString() + column.title}
            scope="col"
            className="border border-slate-300 px-6 py-3"
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
