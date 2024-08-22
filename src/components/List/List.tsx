import { ListInterface } from '../../utils';
import { ListItemTitle } from './ListItemTitle';
import { ListItemValue } from './ListItemValue';

export const List = (props: { listData: ListInterface[] }) => {
  return (
    <ul className="w-full md:w-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {props.listData.map((item) => (
        <li
          key={item.title}
          className="flex justify-start flex-col md:flex-row md:justify-between w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
        >
          <ListItemTitle title={item.title} />
          <ListItemValue value={item.value} />
        </li>
      ))}
    </ul>
  );
};
