const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

const checkPalindrome = (string) => {
  let reversedString = '';
  const normalString = string.toLowerCase().replaceAll(' ','');

  for (let i = normalString.length - 1; i >= 0; i--) {
    reversedString += normalString[i];
  }

  return (reversedString === normalString);
};

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');

