// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imageElement = [];
galleryItems.forEach(galleryItem => {
    const container = document.createElement('div');
    container.classList.add('gallery__item');
    const link = document.createElement('a');
    link.classList.add('gallery__link')
    link.href = galleryItem.original;
    const img = document.createElement('img');
    img.classList.add('gallery__image')
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    img.dataset.source = galleryItem.original;
    link.appendChild(img)
    container.appendChild(link)

    imageElement.push(container)
})

gallery.append(...imageElement)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: "Escape",
});