const SAMPLE_STEP = 25;
const MIN_SAMPLE_VALUE = 25;
const MAX_SAMPLE_VALUE = 100;
const DEFAULT_SAMPLE_VALUE = MAX_SAMPLE_VALUE;

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

const resetSample = () => samplePreview(DEFAULT_SAMPLE_VALUE);

zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);

export { resetSample };
