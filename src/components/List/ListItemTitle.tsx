import { ListItemTitleInterface } from '../../utils';

export const ListItemTitle = (props: ListItemTitleInterface) => {
  return (
    <span className="w-full md:w-1/2 text-lg text-slate-600">
      {props.title} :
    </span>
  );
};
