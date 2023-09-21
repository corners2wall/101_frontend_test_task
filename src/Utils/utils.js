export const getObjectProperty = (object, path) => {
  if (object == null) return object;

  const parts = path.split(".");
  return parts.reduce((object, key) => object?.[key], object);
};
