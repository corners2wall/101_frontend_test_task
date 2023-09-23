import FieldHelper from "./FieldHelper";

export const getObjectValueByPath = (object, path) => {
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

export function findBestValues(template, target) {
  let result = "";

  if (!target) return "";

  if (template instanceof FieldHelper && target) {
    if (template.value === target) return template.message;

    return "";
  }

  for (const key in template) {
    const value = template[key];
    result = `${result} 
    ${findBestValues(value, target[key])}`;
  }

  return result;
}
