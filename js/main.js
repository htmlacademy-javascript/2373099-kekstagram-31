/* eslint-disable no-console */
const NAME = [
  'Тор Одинсон',
  'Арнольд',
  'Просто Олег',
  'Сергей Сергеич',
  'Арагорн',
  'Валера',
  'Антонио',
  'Воландеморт'
];
const DESCRIPTION = [
  'Зачем все это',
  'Скоро весна',
  'Атебе это точно нужно',
  'После весны всегда лето',
  'Все будет норм'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumberLikes = () => getRandomInteger(15, 200);
const getRandomNumberAvatars = () => getRandomInteger(1, 6);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let photoId = 1;
let photoUrl = 1;
let commentId = 0;

const descriptionPhoto = () => ({
  url: `photos/${photoUrl++}.jpg`,
  id: photoId++,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumberLikes(),
  comments: [{
    id: commentId++,
    avatar: `img/avatar-${getRandomNumberAvatars()}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  }]
});

const comment = Array.from({ length: 25 }, descriptionPhoto);

console.log(comment);
