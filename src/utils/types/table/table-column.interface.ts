export interface ColumnInterface<T> {
  title: string;
  key: keyof T;
}
