
const galleryUl = document.querySelector('js-gallery');
const galleryList = createWeb(galleryItems);





function createWeb(galleryItem) {
    return galleryItem.map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
             </a>
            </li>
        `
    }).join('');
}
galleryUl.insertAdjacentHTML = ('beforeend', galleryList);
