let library = [];
const DIALOG_ELMENT = document.querySelector("dialog");
const SHW_BTN = document.querySelector('.btn-show-modal');
const CLS_BTN = document.querySelector('#close');
const ADD_BTN = document.querySelector('#submit');
const FORM = document.querySelector('form')


SHW_BTN.addEventListener('click', () => {
    DIALOG_ELMENT.showModal();
});

CLS_BTN.addEventListener('click', () => {
    DIALOG_ELMENT.close();
});


function Book(author, title, numPages, note) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.note = note;
}

DIALOG_ELMENT.addEventListener('submit', (e) => {
    e.preventDefault();
    const FORM_DATA = Object.fromEntries(new FormData(FORM));
    const NEW_BOOK = new Book(FORM_DATA.author, FORM_DATA.title, FORM_DATA.pages, FORM_DATA.notes);
    console.log(NEW_BOOK);
    addBook(NEW_BOOK);
    DIALOG_ELMENT.close();
});

function addBook(bookToAdd) {
    library.push(bookToAdd);

    const TABLE = document.querySelector('tbody');
    const ROW = document.createElement('tr');
    const READ_BUTTON = document.createElement('button');
    const DEL_BTN = document.createElement('button');

    DEL_BTN.className = "button";
    DEL_BTN.textContent = "Delete";


    const newEl = Object.values(library[0]);
    console.log(newEl);
    for (let x in newEl) {
        const TABLE_DATA = document.createElement('td');

        if (newEl[x] === "read") {
            READ_BUTTON.className = "button";
            READ_BUTTON.id = "readButton";
            READ_BUTTON.textContent = newEl[x];
            TABLE_DATA.appendChild(READ_BUTTON);
            ROW.appendChild(TABLE_DATA);

        } else if (newEl[x] === "unread") {
            READ_BUTTON.className = "button";
            READ_BUTTON.id = "unReadButton";
            READ_BUTTON.textContent = newEl[x];
            TABLE_DATA.appendChild(READ_BUTTON);
            ROW.appendChild(TABLE_DATA);

        } else
            TABLE_DATA.textContent = `${newEl[x]}`;
        ROW.appendChild(TABLE_DATA);

    }

    const TABLE_DEL_BUTTON = document.createElement('td');
    TABLE_DEL_BUTTON.appendChild(DEL_BTN);
    ROW.appendChild(TABLE_DEL_BUTTON);

    TABLE.appendChild(ROW);
    library = [];
}

console.log(library); //debug only.


// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'nor read yet')
// myLibrary.push(book1);
// console.log(myLibrary);



