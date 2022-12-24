export type BookProps = {
    title: string;
    year: number;
    author: string;
    description: string;
};

/**
 * Book component
 */
export const Book = ({ title, year, author, description }: BookProps) => (
    <div className="book">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <p>
            Description: <i>{description}</i>
        </p>
    </div>
);
