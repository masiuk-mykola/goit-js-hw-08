import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const makeGalleryItemsMarkup = arrObj => {
  return arrObj
    .map(
      image =>
        `<li class="gallery__item"><a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a></li>`
    )
    .join('');
};

const galleryContainerRef = document.querySelector('.gallery');

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
