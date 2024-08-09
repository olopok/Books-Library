const myLibrary = [];
const dialogElem = document.querySelector("dialog");
const shwBtn = document.querySelector('.btn-show-modal');

shwBtn.addEventListener('click', () => {
    dialogElem.showModal();
} )

function Book (author, title, numPages, note) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.note = note;
}


