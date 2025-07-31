/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
  return function (obj) {
    const keys = path.split(".");
    // первое аккумулятор, второй нынешнее значение
    // передаем через [ключ]. то бишь мы прогоняемся по массиву и кладем в объект ключ
    return keys.reduce((currentObj, key) => currentObj && currentObj[key], obj);
    // obj - начальное значение
  };
}
