import { renderImageItems } from './miniatures.js';
import { imagesGallery } from './photos.js';
import { setFormSubmit } from './validate-form.js';
import { getData } from './api.js';
import { dataErrorMessage } from './message.js';
import { initFilter } from './filters.js';

getData()
  .then((photos) => {
    renderImageItems(photos);
    imagesGallery(photos);
    initFilter(renderImageItems, photos);
  })
  .catch(() => {
    dataErrorMessage();
  });

setFormSubmit();
