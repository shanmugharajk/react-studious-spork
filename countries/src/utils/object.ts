export const isNull = (val: unknown) => val === null;

export const isDef = (val: unknown) =>
  !isNull(val) && typeof val !== "undefined";
