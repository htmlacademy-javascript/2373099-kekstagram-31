import { removeComments, renderComments } from './comment.js';
import { isEscapeKey } from './util.js';

const body = document.body;
const bigImage = document.querySelector('.big-picture');
const bigImageCloseBtn = bigImage.querySelector('.big-picture__cancel');

const renderImageModal = ({url, likes, comments, description}) => {
  const image = bigImage.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;

  bigImage.querySelector('.likes-count').textContent = likes;
  bigImage.querySelector('.social__caption').textContent = description;
  bigImage.querySelector('.social__comment-total-count').textContent = comments.length;

  renderComments();
};

const onBigImageCloseBtnClick = () => {
  closeBigImage();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigImage();
  }
}

function closeBigImage () {
  removeComments();
  bigImage.classList.add('hidden');
  body.classList.remove('modal-open');
  bigImageCloseBtn.removeEventListener('click', onBigImageCloseBtnClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openBigImage (photo) {
  bigImage.classList.remove('hidden');
  body.classList.add('modal-open');

  renderImageModal(photo);
  bigImageCloseBtn.addEventListener('click', onBigImageCloseBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export { openBigImage };
