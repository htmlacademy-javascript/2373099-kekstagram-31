import {makeGallery} from './mock-data.js';

const imageContainer = document.querySelector('.pictures');
const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const makeImages = () => {
  const imageList = makeGallery();
  const imageListFragment = document.createDocumentFragment();

  imageList.forEach(({url, comments, description, likes}) => {
    const imageItem = imageTemplate.cloneNode(true);
    const newPictureImage = imageItem.querySelector('.picture__img');
    newPictureImage.src = url;
    newPictureImage.alt = description;
    imageItem.querySelector('.picture__likes').textContent = likes;
    imageItem.querySelector('.picture__comments').textContent = comments.length;
    imageListFragment.appendChild(imageItem);
  });

  imageContainer.appendChild(imageListFragment);
};

export {makeImages};
