import { Book, BookProps } from "./Book";

type BookListProps = {
    books: BookProps[];
};

/**
 * List of all books
 */
const BookList = ({ books }: BookListProps) => (
    <ul>
        {books[0] ? (
            books.map(({ title, year, author, description }, index) => (
                <li key={index}>
                    <Book
                        title={title}
                        year={year}
                        author={author}
                        description={description}
                    />
                </li>
            ))
        ) : (
            <p>😔 No results</p>
        )}
    </ul>
);

export default BookList;
