import { useEffect, useState } from 'react';
import { RangeInterface, useDebounce } from '../utils';

export const Range = (props: RangeInterface) => {
  const [value, setValue] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    onChangeDebounced(value);
  }, [value]);

  const _onChangeDebounced = async (range: number) => {
    props.clickHandler &&
      props.clickHandler({ key: props.title, value: range });
  };

  const onChangeDebounced = useDebounce(_onChangeDebounced, 400);

  return (
    <div className="flex justify-center items-center w-full md:w-1/2 space-x-4 my-2">
      <input
        id="small-range"
        type="checkbox"
        checked={isActive}
        className="w-4 h-4 flex-none text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
        onChange={() => setIsActive((prev) => !prev)}
      />

      <label
        htmlFor="small-range"
        className="text-md flex-none font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>

      <input
        id="small-range"
        type="range"
        value={value}
        min="0"
        max="200"
        className="h-1 flex-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
        disabled={!isActive}
      />

      <label className="ml-2 text-sm flex-none font-medium text-gray-900 dark:text-white">
        {isActive ? value : '-'}
      </label>
    </div>
  );
};
