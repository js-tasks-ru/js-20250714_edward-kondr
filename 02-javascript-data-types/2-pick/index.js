/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = {};

  // первый вариант решения
  for (let [value, key] of Object.entries(obj)) {
    if (fields.includes(value)) {
      result[value] = key;
    }
  }

  return result;
};
