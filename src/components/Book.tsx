import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export type BookType = {
    id: number;
    title: string;
    year: number;
    author: string;
    description: string;
};

export type BookProps = {
    onDelete: (id: number) => void;
    book: BookType;
};

/**
 * Book component
 */
export const Book = function ({
    onDelete,
    book: { id, title, year, author, description },
}: BookProps) {
    return (
        <div className="book card p-4 mb-4 ">
            <div className="manage">
                <FontAwesomeIcon
                    className="btn btn-danger btn-md"
                    onClick={() => onDelete(id)}
                    icon={faTrash}
                />
            </div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>
                Description: <i>{description}</i>
            </p>
        </div>
    );
};
