let myLibrary = [];

function Book(title, author, pages, readIt){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt
    this.info = ()=>{
        this.info = `${title}, by ${author}, ${pages} pages, `
        this.readIt ? this.info += `finished reading.` : this.info += `not read yet.`
        return this.info
    }
}

function addBooktoLibrary(Book){
    myLibrary.push(Book)
}