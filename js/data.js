import {getRandomNumberLikes, getRandomNumberAvatars, getRandomArrayElement} from './util.js';

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

let photoId = 1;
let photoUrl = 1;
let commentId = 0;

const descriptionPhoto = () => ({
  url: `photos/${photoUrl++}.jpg`,
  id: photoId++,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumberLikes(),
  comment: [{
    id: commentId++,
    avatar: `img/avatar-${getRandomNumberAvatars()}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  }]
});

const comment = () => Array.from({ length: 25 }, descriptionPhoto);

export{comment};
