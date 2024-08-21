import { memo } from 'react';
import { TableRowInterface } from '../../utils';

export const TableRow = memo(function TableRow({
  columns,
  row,
  clickHandler,
}: TableRowInterface) {
  const mapObjectAndValues = (
    obj: { [key: string]: React.ReactNode } | any,
  ) => {
    if (typeof obj !== 'object' || obj?.length !== undefined) {
      return obj;
    } else {
      const result = [];
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const element = obj[key];
          result.push(`${key}: ${element}`);
        }
      }

      return result.join(', ');
    }
  };
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-200"
      onClick={() => clickHandler && clickHandler(row)}
    >
      {columns.map((column) => (
        <td
          key={column.key + column.title}
          className="border border-slate-300 px-6 py-4"
        >
          {mapObjectAndValues(row[column.key])}
        </td>
      ))}
    </tr>
  );
});
