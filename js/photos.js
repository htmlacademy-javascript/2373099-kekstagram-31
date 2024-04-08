import { openBigImage } from './big-photos.js';

const imageContainer = document.querySelector('.pictures');

const imagesGallery = (photos) => {
  imageContainer.addEventListener('click', (evt) => {
    const targetPicture = evt.target.closest('.picture');

    if(!targetPicture) {
      return;
    }

    evt.preventDefault();
    const targetPictureId = targetPicture.getAttribute('data-id');
    const targetPhoto = photos.find((photo) => photo.id === +targetPictureId);

    openBigImage(targetPhoto);
  });
};

export { imagesGallery };
