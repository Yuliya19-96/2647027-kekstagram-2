// Функция 1. Проверка длины строки
const checkString = (string, length) => string.length <= length;

// Функция 2. Проверка, является ли строка палиндромом
const isPalindrome = (str) => {
  const normalized = str
    .replaceAll(' ', '')
    .toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }
  return normalized === reversed;
};

// Функция 3. Извлечение цифр из строки
const extractNumbers = (input) => {
  const str = input.toString();
  let digits = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const number = parseInt(char, 10);
    if (!isNaN(number)) {
      digits += char;
    }
  }
  return digits.length > 0 ? Number(digits) : NaN;
};
