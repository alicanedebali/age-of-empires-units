import { TableRowInterface } from '../../utils';

export function TableRow<T>({
  columns,
  row,
  clickHandler,
}: TableRowInterface<T>) {
  const mapObjectAndValues = (obj: React.ReactNode | T) => {
    if (typeof obj !== 'object') {
      return obj;
    } else {
      const result = [];
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const element = obj[key as never];
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
          key={column.key.toString() + column.title}
          className="border border-slate-300 px-6 py-4"
        >
          {`${mapObjectAndValues(row[column.key] as React.ReactNode | T)}`}
        </td>
      ))}
    </tr>
  );
}
