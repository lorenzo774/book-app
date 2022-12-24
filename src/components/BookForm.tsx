import { FormEvent, useState } from "react";

type BookFormProps = {
    handleClick: (
        title: string,
        year: number,
        author: string,
        description: string
    ) => void;
};

/**
 * Book form
 */
const BookForm = function ({ handleClick }: BookFormProps) {
    const [title, setTitle] = useState("");
    // Set this year as the default
    const [year, setYear] = useState(new Date().getFullYear());
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const resetFields = function () {
        setTitle("");
        setYear(new Date().getFullYear());
        setAuthor("");
        setDescription("");
    };

    // Prevent default (reloading) and call passed props method
    const handleSubmit = function (e: FormEvent<HTMLElement>) {
        e.preventDefault();
        handleClick(title, year, author, description);
        resetFields();
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="book-form"
        >
            <label htmlFor="title">Title</label>
            <input
                required
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="year">Year</label>
            <input
                required
                name="year"
                type="number"
                value={year || ""}
                onChange={(e) => setYear(Number(e.target.value))}
            />
            <label htmlFor="author">Author</label>
            <input
                required
                name="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
                cols={50}
                rows={10}
                required
                name="author"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default BookForm;
