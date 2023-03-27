const listLink = document.querySelector('#list-link');
const addBookLink = document.querySelector('#addbook-link');
const contactLink = document.querySelector('#contact-link');

const bookListSection = document.querySelector('#booklist-section');
const addbookInputs = document.querySelector('#addbook-inputs');
const contactSection = document.querySelector('#contact-section');

 const showBookListSection = () => {
  bookListSection.classList.add('visible');
  addbookInputs.classList.add('hidden');
  contactSection.classList.add('hidden');
  addbookInputs.classList.remove('visible');
  contactSection.classList.remove('visible');
}

const showAddBookInputs = () => {
  bookListSection.classList.remove('visible');
  contactSection.classList.remove('visible');
  bookListSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  addbookInputs.classList.add('visible');
}

const showContactSection = () => {
  addbookInputs.classList.add('hidden');
  bookListSection.classList.add('hidden');
  contactSection.classList.add('visible');
  addbookInputs.classList.remove('visible');
  bookListSection.classList.remove('visible');
}

listLink.addEventListener('click', showBookListSection);
addBookLink.addEventListener('click', showAddBookInputs);
contactLink.addEventListener('click', showContactSection);

export { showBookListSection, showAddBookInputs, showContactSection };

