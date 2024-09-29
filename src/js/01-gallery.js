import images from './images';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('ul.gallery');
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.href = image.original;
  a.classList.add('gallery-link');
  img.src = image.preview;
  img.alt = image.description;
  img.dataset.source = image.original;
  img.classList.add('gallery-image');
  li.classList.add('gallery-item');

  a.appendChild(img);
  li.appendChild(a);
  fragment.appendChild(li);
});

ul.appendChild(fragment);
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});

const lightbox = new SimpleLightbox('.gallery li > a', {
  captionsData: 'alt',
  captionDelay: 250,
});