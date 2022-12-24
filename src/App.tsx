import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./style/app.css";

const App = () => {
    const [idCounter, setIdCounter] = useState(3); // Just an example
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "book 1",
            year: 2010,
            author: "mario rossi",
            description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
        },
        {
            id: 2,
            title: "book 2",
            year: 2020,
            author: "giocamo giovanni",
            description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
        },
        {
            id: 3,
            title: "book 3",
            year: 2021,
            author: "mario luigi",
            description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
        },
    ]);

    const addBook = function (
        title: string,
        year: number,
        author: string,
        description: string
    ) {
        setIdCounter((prev) => prev + 1);
        setBooks([
            ...books,
            { id: idCounter, title, year, author, description },
        ]);
    };

    const deleteBook = function (id: number) {
        setBooks((prev) => prev.filter((book) => book.id !== id));
    };
    return (
        <div className="App">
            <header>
                <h1>Book app</h1>
            </header>
            <main>
                <BookForm handleClick={addBook.bind(this)} />
                <BookList
                    onBookDelete={deleteBook}
                    books={books}
                />
            </main>
            <footer>
                <p>By Lorenzo774</p>
            </footer>
        </div>
    );
};

export default App;
