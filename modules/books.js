const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
class Book {
  constructor() {
    this.books = [];
  }
/* eslint-disable */
  addBook() {
    const title = BookName.value;
    const author = authorName.value;
    const books = { title, author };
    bookList.push(books);
    localStorage.setItem('book-list', JSON.stringify(bookList));
  }

  // display method
  displayBlock() {
    container.innerHTML = '';
    bookList.forEach((book, index) => {
      container.innerHTML += `
      <ul class="Books">
        <li class="inps">"${book.title}" by ${book.author}</li>
        <li class="btnclass">
          <button class = "remove" onlick= "remove()" data-index="${index}">Remove</button>
        </li>
        </ul>
        `;
    });
  }
// remove method
  remove = (index) => {
    bookList.splice(index, 1);
    localStorage.setItem('book-list', JSON.stringify(bookList));
    this.displayBlock();
  }
}

export default Book;


