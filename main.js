class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {  
    static displayBooks() {
        const StoredBooks = [
            {
                title : 'The eyes have it',
                author: 'Ruskin Bond',
                isbn: '45644'
            },
            {
                title : 'The eyes have it',
                author: 'Ruskin Bond',
                isbn: '45644'
            },
            {
                title : 'The eyes have it',
                author: 'Ruskin Bond',
                isbn: '45644'
            },
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" style="background-color : red; color: white; padding: 8px 16px; text-decoration: none; font-family: Arial, sans-serif; border-radius: 3px">DELETE</td>
        `;

        list.appendChild(row);
    }
}

// DISPLAY BOOKS 

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//  ADD A BOOK

document.querySelector('#my-form')    