import {getRandomInteger, getRandomIntegerFromRange, createIdGenerator} from './util.js';

const gallerySize = 25;
const likeMin = 15;
const likeMax = 200;
const avatar = 6;
const commentMax = 30;

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

const generateId = createIdGenerator();
const generateUrl = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const makeComment = () => ({
  id: getRandomIntegerFromRange(1, gallerySize * commentMax)(),
  avatar: `img/avatar-${getRandomIntegerFromRange(1, avatar)()}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});


const makePost = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(likeMin, likeMax),
  comments: Array.from({length: getRandomInteger(0, commentMax)}, makeComment),
});

const makeGallery = () => Array.from({length: gallerySize}, makePost);

export{makeGallery};
