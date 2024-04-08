const FILTERS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 1,
    unit: '',
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_FILTER = FILTERS[0];

const preview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectValue = sliderContainer.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects');

let currentFilter = DEFAULT_FILTER;

const isDefault = () => currentFilter.name === DEFAULT_FILTER.name;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_FILTER.min,
    max: DEFAULT_FILTER.max,
  },
  start: DEFAULT_FILTER.max,
  step: DEFAULT_FILTER.step,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed((Number.isInteger(value)) ? 0 : 1),
    from: Number.parseFloat,
  },
});
const updateSliderOptions = () => {

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentFilter.min,
      max: currentFilter.max,
    },
    step: currentFilter.step,
    start: currentFilter.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const resetFilters = () => {
  currentFilter = DEFAULT_FILTER;

  updateSliderOptions();
};

const onEffectChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  currentFilter = FILTERS.find((effect) => effect.name === evt.target.value);

  updateSliderOptions();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  effectValue.value = sliderValue;

  preview.style.filter = isDefault() ? DEFAULT_FILTER.filter : `${currentFilter.filter}(${sliderValue}${currentFilter.unit})`;
};

hideSlider();
effectsContainer.addEventListener('change', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetFilters };
