import { ListItemValueInterface } from '../../utils';

export const ListItemValue = (props: ListItemValueInterface) => {
  return <span className="w-full md:w-1/2 text-lg">{props.value}</span>;
};
