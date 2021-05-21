import { CounterStore } from "./counter-store";

describe("CounterStore", () => {
  const counterStore = new CounterStore();

  it("should renturn the initial counter value", () => {
    expect(counterStore.count).toBe(0);
  });

  it("should increment the counter value", () => {
    counterStore.increment();
    expect(counterStore.count).toBe(1);
  });

  it("should decrement the counter value", () => {
    counterStore.decrement();
    expect(counterStore.count).toBe(0);
  });
});
