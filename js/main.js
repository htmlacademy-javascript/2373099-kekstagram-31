import {imageItems} from './miniatures.js';
import {imagesGallery} from './photos.js';
import { makeGallery } from './mock-data.js';

const photos = makeGallery();
imageItems(photos);
imagesGallery(photos);
