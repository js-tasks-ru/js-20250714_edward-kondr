/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = "";
  // счетчик одинаковых
  let count = 0;
  // последний символ
  let lastChar = "";

  for (const char of string) {
    // если строго, то делаем счетчику плюс
    if (char === lastChar) {
      count++;
    } else {
      // в ином случае будет равен 1
      count = 1;
    }

    // если счетчик меньше или равен размеру, то результат плюс char, '' + 'xxx'
    if (count <= size) {
      result += char;
    }

    // последний символ равен символу
    lastChar = char;
  }

  return result;
}
