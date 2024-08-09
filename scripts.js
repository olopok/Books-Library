const myLibrary = [];
const dialogElem = document.querySelector("dialog");
const shwBtn = document.querySelector('.btn-show-modal');
const clsBtn = document.querySelector('#close');

shwBtn.addEventListener('click', () => {
    dialogElem.showModal();
} );

clsBtn.addEventListener('click', () => {
    dialogElem.close();
});

function Book (author, title, numPages, note) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.note = note;
}


