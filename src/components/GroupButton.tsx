import classNames from 'classnames';
import { useState } from 'react';
import { GroupButtonInterface } from '../utils';

export const GroupButton = (props: GroupButtonInterface) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const onClickedButton = (index: number, selectedButton: string) => {
    props.clickHandler && props.clickHandler({ name: selectedButton });
    setFocusedIndex(index);
  };
  return (
    <div className="inline-flex rounded-md shadow-sm button-group">
      {props.buttonList.map((item, index) => (
        <a
          key={item + index}
          href="#"
          className={classNames([
            focusedIndex === index ? 'text-blue-700' : 'text-gray-900',
            'px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-100 focus:z-10',
          ])}
          onClick={() => onClickedButton(index, item)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
