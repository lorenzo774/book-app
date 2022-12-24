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
            className="border p-4 mb-5"
        >
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    className="form-control"
                    required
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    className="form-control"
                    required
                    name="year"
                    type="number"
                    value={year || ""}
                    onChange={(e) => setYear(Number(e.target.value))}
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    className="form-control"
                    required
                    name="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    required
                    name="author"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
                className="w-100 btn btn-primary"
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default BookForm;
