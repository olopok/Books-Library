const LIBRARY = [];

function Book(author, title, numPages, note) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.note = note;
}

const DIALOG = document.querySelector('dialog');
const SHOW_MODAL = document.querySelector('.btn-show-modal');

SHOW_MODAL.addEventListener('click', () => {
    DIALOG.showModal();
});

const CANCEL_BTN = document.querySelector('#close');

CANCEL_BTN.addEventListener('click', () => {
    DIALOG.close();
});

const ADD_BTN = document.querySelector('#submit');
const FORM = document.querySelector('form');
let infoBook = {};

DIALOG.addEventListener('submit', (e) => {
    e.preventDefault();
    const USER_INPUT = new FormData(FORM);
    infoBook = Object.fromEntries(USER_INPUT);
    console.log(infoBook);
    DIALOG.close();
})