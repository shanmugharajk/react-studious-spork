import { makeAutoObservable } from "mobx";

export interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export class CounterStore implements ICounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export const counterStore = new CounterStore();
