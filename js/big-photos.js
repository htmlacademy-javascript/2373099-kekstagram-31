import {removeComments, renderComments} from './comment.js';
import { isEscapeKey } from './util.js';

const body = document.body;
const bigImage = document.querySelector('.big-picture');
const bigImageClose = bigImage.querySelector('.big-picture__cancel');

const renderModal = ({url, likes, comments, description}) => {
  const image = bigImage.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;

  bigImage.querySelector('.likes-count').textContent = likes;
  bigImage.querySelector('.social__caption').textContent = description;
  bigImage.querySelector('.social__comment-total-count').textContent = comments.length;

  removeComments();
  renderComments(comments, true);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigImage();
  }
}

function closeBigImage () {
  bigImage.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openBigImage (photo) {
  bigImage.classList.remove('hidden');
  body.classList.add('modal-open');

  renderModal(photo);

  document.addEventListener('keydown', onDocumentKeydown);
}

bigImageClose.addEventListener('click', () => {
  closeBigImage ();
});

export { openBigImage };
