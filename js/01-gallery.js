import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");


const markupItem = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href=${original}> <img 
   class="gallery__image" src=${preview} data-source=${original} 
   alt="${ description }" /> </a></li>`
).join('');

galleryUl.insertAdjacentHTML('afterbegin', markupItem);

galleryUl.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };
   
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
            onShow: instance => {
                window.addEventListener('keydown', onImgClose);
            },
            onClose: instance => {
                window.removeEventListener('keydown', onImgClose);
            },
        }
    );
    instance.show();

    function onImgClose(evt) {
    if (evt.code === "Escape") {
       instance.close();
    };
}
};


