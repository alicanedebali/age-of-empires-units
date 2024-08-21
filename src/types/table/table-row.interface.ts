import { ColumnInterface } from './table-column.interface';

export interface TableRowInterface {
  columns: ColumnInterface[];
  row: any;
  clickHandler?: (e: any) => void;
}
