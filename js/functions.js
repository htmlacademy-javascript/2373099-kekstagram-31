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

const hoursToMinutes = (time) => {
  const timeAll = time.split(':');
  return parseInt(timeAll[0],10) * 60 + parseInt(timeAll[1],10);
};

const workDay = (startWork, endWork, startMeet, timeMeet) => {
  const startWorkMInutes = hoursToMinutes(startWork);
  const stopWorkMinutes = hoursToMinutes(endWork);
  const meetSum = hoursToMinutes(startMeet);

  if (!(meetSum + timeMeet <= startWorkMInutes)) {
    return (!(meetSum + timeMeet > stopWorkMinutes));
  } return false;
};

workDay();
