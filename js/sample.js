import { SAMPLE_STEP, MIN_SAMPLE_VALUE, MAX_SAMPLE_VALUE, DEFAULT_SAMPLE_VALUE } from './consts.js';

const sample = document.querySelector('.img-upload__scale');
const zoomOutButton = sample.querySelector('.scale__control--smaller');
const zoomInButton = sample.querySelector('.scale__control--bigger');
const scaleValue = sample.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

const samplePreview = (value) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const zoomIn = () => {
  samplePreview(Math.min(
    parseInt(scaleValue.value, 10) + SAMPLE_STEP, MAX_SAMPLE_VALUE)
  );
};

const zoomOut = () => {
  samplePreview(Math.max(
    parseInt(scaleValue.value, 10) - SAMPLE_STEP, MIN_SAMPLE_VALUE)
  );
};

const onZoomInButtonClick = () => {
  zoomIn();
};

const onZoomOutButtonClick = () => {
  zoomOut();
};

const resetSample = () => samplePreview(DEFAULT_SAMPLE_VALUE);

zoomInButton.addEventListener('click', onZoomInButtonClick);
zoomOutButton.addEventListener('click', onZoomOutButtonClick);

export { resetSample };
