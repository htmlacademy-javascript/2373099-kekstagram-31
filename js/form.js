import {isEscapeKey} from './util.js';
import { validateForm, resetValidator } from '../validate-form.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');

const uploadModalClose = uploadOverlay.querySelector('.img-upload__cancel');
const hashtagsField = uploadOverlay.querySelector('.text__hashtags');
const descriptionField = uploadOverlay.querySelector('.text__description');

const isTextFieldFocused = () =>
  document.activeElement === hashtagsField ||
  document.activeElement === descriptionField;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeBigImage();
  }
}

function openBigImage() {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigImage() {
  uploadInput.value = '';
  hashtagsField.value = '';
  descriptionField.value = '';
  resetValidator();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openBigImage);

uploadModalClose.addEventListener('click', closeBigImage);

validateForm();
