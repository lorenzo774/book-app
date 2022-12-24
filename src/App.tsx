import { Component } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./style/app.css";

class App extends Component {
    state = {
        books: [
            {
                title: "book 1",
                year: 2010,
                author: "mario rossi",
                description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
            },
            {
                title: "book 2",
                year: 2020,
                author: "giocamo giovanni",
                description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
            },
            {
                title: "book 3",
                year: 2021,
                author: "mario luigi",
                description: `
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit rerum optio repellendus, earum odit nulla illum, molestias nostrum doloremque ducimus dolorem corporis illo vel numquam consequatur impedit. Velit, dignissimos.`,
            },
        ],
    };

    addBook(title: string, year: number, author: string, description: string) {
        this.setState({
            books: [...this.state.books, { title, year, author, description }],
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Book app</h1>
                </header>
                <main>
                    <BookForm handleClick={this.addBook.bind(this)} />
                    <BookList books={this.state.books} />
                </main>
                <footer>
                    <p>By Lorenzo774</p>
                </footer>
            </div>
        );
    }
}

export default App;
