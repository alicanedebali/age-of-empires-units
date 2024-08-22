import { ColumnInterface } from './table-column.interface';

export interface TableRowInterface<T> {
  columns: ColumnInterface<T>[];
  row: T;
  clickHandler?: (e: T) => void;
}
