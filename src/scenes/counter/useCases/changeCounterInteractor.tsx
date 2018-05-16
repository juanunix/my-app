import { ICounterGateway } from './counterGateway';

export interface IChangeCounterInteractor {
  increment(): void;
  decrement(): void;
}

export function createChangeCounterInteractor(counterGateway: ICounterGateway): IChangeCounterInteractor {
  return {
    increment() {
      counterGateway.increment();
    },

    decrement() {
      counterGateway.decrement();
    }
  };
}
