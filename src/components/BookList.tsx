import { Book, BookType } from "./Book";

type BookListProps = {
    onBookDelete: (id: number) => void;
    books: BookType[];
};

/**
 * List of all books
 */
const BookList = ({ onBookDelete, books }: BookListProps) => (
    <ul>
        {books[0] ? (
            books.map(({ id, title, year, author, description }, index) => (
                <li key={index}>
                    <Book
                        onDelete={onBookDelete}
                        book={{ id, title, year, author, description }}
                    />
                </li>
            ))
        ) : (
            <p>😔 No results</p>
        )}
    </ul>
);

export default BookList;
