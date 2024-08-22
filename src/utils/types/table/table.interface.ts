import { ColumnInterface } from './table-column.interface';

export interface TableInterface<T> {
  columns?: ColumnInterface<T>[];
  data: T[];
  clickHandler?: (e: T) => void;
}
