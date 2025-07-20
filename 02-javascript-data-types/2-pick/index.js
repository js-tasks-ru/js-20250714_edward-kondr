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

  // второй вариант решения
  for (let [value, key] of Object.entries(obj)) {
    for (let fruit of fields) {
      if (value === fruit) {
        result[value] = key;
        continue;
      }
    }
  }

  // третий вариант решения
  for (let [value, key] of Object.entries(obj)) {
    for (let fruit of fields) {
      if (value.includes(fruit)) {
        result[value] = key;
        continue;
      }
    }
  }

  return result;
};

const fruits = {
  apple: 2,
  orange: 4,
  banana: 3,
};

console.log(pick(fruits, "apple", "banana"));
