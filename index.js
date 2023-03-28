import Book from './modules/books.js';
import './modules/navigation.js';
import './modules/date.js';

const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
const btn = document.querySelector('form');

const book = new Book();
btn.addEventListener('submit', book.addBook);
book.displayBlock();

// eventliststener
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    book.remove(index);
  }
});

const listLink = document.querySelector('#list-link');
const addBookLink = document.querySelector('#addbook-link');
const contactLink = document.querySelector('#contact-link');

const bookListSection = document.querySelector('#booklist-section');
const addbookInputs = document.querySelector('#addbook-inputs');
const contactSection = document.querySelector('#contact-section');

listLink.addEventListener('click', () => {
  bookListSection.classList.add('visible');
  addbookInputs.classList.add('hidden');
  contactSection.classList.add('hidden');
  addbookInputs.classList.remove('visible');
  contactSection.classList.remove('visible');
});

addBookLink.addEventListener('click', () => {
  bookListSection.classList.remove('visible');
  contactSection.classList.remove('visible');
  bookListSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  addbookInputs.classList.add('visible');
});
contactLink.addEventListener('click', () => {
  addbookInputs.classList.add('hidden');
  bookListSection.classList.add('hidden');
  contactSection.classList.add('visible');
  addbookInputs.classList.remove('visible');
  bookListSection.classList.remove('visible');
});
