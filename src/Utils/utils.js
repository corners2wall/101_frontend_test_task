export const getObjectProperty = (object, path) => {
  if (object == null) return object;

  const parts = path.split(".");
  return parts.reduce((object, key) => object?.[key], object);
};

export const findMinValue = (a, b) => Math.min(a, b);

export const findMaxValue = (a, b) => Math.max(a, b);

export const compose =
  (...fns) =>
  (initialVal) =>
    fns.reduceRight((val, fn) => fn(val), initialVal);
