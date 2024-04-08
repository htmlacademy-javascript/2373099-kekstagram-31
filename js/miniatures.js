const imageContainer = document.querySelector('.pictures');
const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createImageItem = ({ url, comments, description, likes, id }) => {
  const imageItem = imageTemplate.cloneNode(true);
  const newPictureImage = imageItem.querySelector('.picture__img');

  newPictureImage.src = url;
  newPictureImage.alt = description;

  imageItem.href = url;
  imageItem.dataset.id = id;
  imageItem.querySelector('.picture__likes').textContent = likes;
  imageItem.querySelector('.picture__comments').textContent = comments.length;
  return imageItem;
};

const renderImageItems = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createImageItem(picture);
    fragment.append(thumbnail);
  });

  imageContainer.append(fragment);
};

const removeImageItems = () => {
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

export { renderImageItems, removeImageItems };
