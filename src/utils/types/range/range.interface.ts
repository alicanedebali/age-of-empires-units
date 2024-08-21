export interface RangeInterface {
  rangeLimit: number;
  title: string;
  clickHandler?: (e: { isActive: boolean; value: number | undefined }) => void;
}
