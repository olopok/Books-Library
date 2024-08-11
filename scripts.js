const myLibrary = [];
const dialogElem = document.querySelector("dialog");
const shwBtn = document.querySelector('.btn-show-modal');
const clsBtn = document.querySelector('#close');
const addBtn = document.querySelector('#submit');

const textAuthor = document.getElementById('author');

// let myForm = document.querySelector('form');


shwBtn.addEventListener('click', () => {
    dialogElem.showModal();
});

clsBtn.addEventListener('click', () => {
    dialogElem.close();
});

addBtn.addEventListener('click', addBook, false);


function Book(author, title, numPages, note) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.note = note;
}


function addBook(evt) {
    const myForm = document.querySelector('form');
    let formData = Object.fromEntries(new FormData(myForm));
    const book = new Book(formData.author, formData.title, formData.pages, formData.notes);
    myLibrary.push(book);
    console.log(myLibrary);
    // console.log(formData);
    evt.preventDefault();
    dialogElem.close();
    return;
}

console.log(myLibrary);


// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'nor read yet')
// myLibrary.push(book1);
// console.log(myLibrary);



