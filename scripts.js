let library = [];
let index = 0;


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

DIALOG.addEventListener('submit', (e) => {
    e.preventDefault();
    const infoBook = Object.fromEntries(new FormData(FORM));
    const newBook = new Book(infoBook.author, infoBook.title, infoBook.pages, infoBook.notes);

    function toggle(tg) {
        if (newBook.note === 'read') {
            tg.classList.remove('readButton');
            tg.classList.add('unReadButton');
            tg.textContent = 'unread';
            newBook.note = 'unread';
        } else if (newBook.note === 'unread') {
            tg.classList.remove('unReadButton');
            tg.classList.add('readButton');
            tg.textContent = 'read';
            newBook.note = 'read';
        }
    }

    function deleteBook(del) {
        const x = del.parentNode;
        const X1 = x.parentElement.id;
        const element = document.getElementById(X1);
        element.remove();
        library.splice(X1, 1);
        console.log(library)

    }


    library.push(newBook);

    const TABLE = document.querySelector('tbody');
    const ROW = document.createElement('tr');
    const READ_BUTTON = document.createElement('button');
    READ_BUTTON.className = "button toggle";
    const DEL_BTN = document.createElement('button');
    DEL_BTN.className = "button";
    DEL_BTN.textContent = "Delete";


    let newEl = Object.values(library[index]);
    for (let x in newEl) {
        const TABLE_DATA = document.createElement('td');
        if (newEl[x] === "read") {
            READ_BUTTON.classList.add("readButton");
            READ_BUTTON.textContent = newEl[x];
            TABLE_DATA.appendChild(READ_BUTTON);
            ROW.appendChild(TABLE_DATA);
            READ_BUTTON.addEventListener('click', (e) => {
                const target = e.target;
                toggle(target);
            });
            TABLE.appendChild(ROW);
        } else if (newEl[x] === "unread") {
            READ_BUTTON.classList.add("unReadButton");
            READ_BUTTON.textContent = newEl[x];
            TABLE_DATA.appendChild(READ_BUTTON);
            ROW.appendChild(TABLE_DATA);
            READ_BUTTON.addEventListener('click', (e) => {
                target = e.target;
                toggle(target);
            });
            TABLE.appendChild(ROW);
        } else
            TABLE_DATA.textContent = `${newEl[x]}`;
        ROW.appendChild(TABLE_DATA);
        ROW.setAttribute('id', index);
        TABLE.appendChild(ROW);
    }

    const TABLE_DEL_BUTTON = document.createElement('td');
    TABLE_DEL_BUTTON.appendChild(DEL_BTN);
    ROW.appendChild(TABLE_DEL_BUTTON);
    TABLE_DEL_BUTTON.addEventListener('click', (e) => {
        const DEL_BUTTON_TARGET = e.target;
        deleteBook(DEL_BUTTON_TARGET);
    })

    newEl = [];
    index++;

    document.querySelector('form').reset();
    DIALOG.close();
});
