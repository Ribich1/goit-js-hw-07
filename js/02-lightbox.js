import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");


const markupItem = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href=${original}> <img 
   class="gallery__image" src=${preview} alt="${ description }" /> </a></li>`
).join('');

galleryUl.insertAdjacentHTML('afterbegin', markupItem);

 let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

