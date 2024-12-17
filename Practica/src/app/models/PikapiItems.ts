import { PikapiItem } from './PikapiItem';

export interface PikapiItems {
  count: number;
  next: string;
  previous: string;
  results: PikapiItem[];
}
