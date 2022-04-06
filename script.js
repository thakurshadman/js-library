let myLibrary = [];

function generateCard(Book){
    card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('col');


    title = document.createElement('h4');
    title.textContent = Book.title;
    card.appendChild(title);

    author = document.createElement('h4');
    author.textContent = Book.author;
    card.appendChild(author);

    pages_container = document.createElement('div');
    pages_container.classList.add('row');
    pages_container.classList.add('pages');
    pageLabel = document.createElement('h4');
    pageLabel.textContent = 'Pages:'
    page_num = document.createElement('h4');
    page_num.textContent = `${Book.pages}`;
    page_num.id = 'pages';
    pages_container.appendChild(pageLabel);
    pages_container.appendChild(page_num);
    card.appendChild(pages_container);
    
    statusContainer = document.createElement('div');
    statusContainer.classList.add('row');
    statusContainer.classList.add('status');
    statusLabel = document.createElement('h4');
    statusLabel.textContent = 'Status:';
    readingStatus = document.createElement('h4');
    Book.readIt ? readingStatus.textContent = 'Read' : readingStatus.textContent = 'Not Read';
    readingStatus.id = 'readIt';
    statusContainer.appendChild(statusLabel);
    statusContainer.appendChild(readingStatus);
    card.appendChild(statusContainer);

    return card;
}

function Book(title, author, pages, readIt){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt
}

function addBooktoLibrary(Book){
    myLibrary.push(Book)
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
let robbit = new Book('The Robbit', 'J.H.H. Tolkien', 259, true);

hobbitHTML = generateCard(hobbit);
robbitHTML = generateCard(robbit);
hobbitHTMLl = generateCard(hobbit);
robbitHTMLl = generateCard(robbit);
bookgrid = document.querySelector('.bookgrid');
bookgrid.appendChild(hobbitHTML);
bookgrid.appendChild(robbitHTML);
bookgrid.appendChild(hobbitHTMLl);
bookgrid.appendChild(robbitHTMLl);
