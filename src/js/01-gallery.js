// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const ulEl = document.querySelector('.gallery');
const element = galleryItems.map(galleryItem => {
    const itemElm = document.createElement('li');
    itemElm.classList.add('gallery__item');

    const linkElm = document.createElement('a');
    linkElm.classList.add('gallery__link');
    linkElm.href = galleryItem.original;

    const imgElm = document.createElement('img');
    imgElm.classList.add('gallery__image');
    imgElm.src = galleryItem.preview;
    imgElm.alt = galleryItem.description;

    itemElm.appendChild(linkElm);
    linkElm.appendChild(imgElm);

    return itemElm;
})
ulEl.append(...element);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
})
