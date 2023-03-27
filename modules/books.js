const bookList = JSON.parse(localStorage.getItem('book-list')) || [];

class Book {
  constructor() {
    this.books = [];
  }

  addBook = (title, author) =>{
    const books = { title, author };
    bookList.push(books);
    localStorage.setItem('book-list', JSON.stringify(bookList));
  }

  displayBlock = () => {
    const container = document.querySelector('.collection');
    container.innerHTML = '';
    bookList.forEach((book, index) => {
      container.innerHTML += `
      <ul class="Books">
        <li class="inps">"${book.title}" by ${book.author}</li>
        <li class="btnclass">
          <button class="remove" data-index="${index}">Remove</button>
        </li>
        </ul>
        `;
    });
  }

  remove = (index) => {
    bookList.splice(index, 1);
    localStorage.setItem('book-list', JSON.stringify(bookList));
    this.displayBlock();
  }
}

export default Book;


