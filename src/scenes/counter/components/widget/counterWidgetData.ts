import { Counter } from '../../entities/counter';

export interface ICounterWidgetData {
  value: string;
}

export function createCounterWidgetData (counter: Counter): ICounterWidgetData {
  return {
    get value(): string {
        return counter.toString();
      }
    }
  };
