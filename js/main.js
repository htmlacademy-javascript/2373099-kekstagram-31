import { renderImageItems } from './miniatures.js';
import { miniaturesClick } from './miniatures-click.js';
import { setFormSubmit } from './validate-form.js';
import { getData } from './api.js';
import { dataErrorMessage } from './message.js';
import { initFilter } from './filters.js';

getData()
  .then((photos) => {
    renderImageItems(photos);
    miniaturesClick(photos);
    initFilter(renderImageItems, photos);
  })
  .catch(() => {
    dataErrorMessage();
  });

setFormSubmit();
