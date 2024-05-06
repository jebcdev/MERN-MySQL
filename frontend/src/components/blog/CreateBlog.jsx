import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateBlog = () => {

    const URI = "http://localhost:4000/blogs/";

    const [blog, setBlog] = useState({
        title: '',
        content: ''
    });

    const navigate = useNavigate();

    const handleChange = (e, key) => {

        setBlog(prevState => ({
            ...prevState,
            [key]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!blog.title) {
            alert('Type Some Title');
            return;
        }

        if (!blog.content) {
            alert('Type Some Content');
            return;
        }


        try {
            await axios.post(URI, blog)
                .then(() => {
                    navigate("/");
                })
        } catch (error) {

            alert(`Huston!, We Got a Proble Here: ${error.message}`);

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className='p-2'>
                <div className="mb-1">

                    <label
                        htmlFor="title"
                        className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={blog.title}
                        onChange={(e) => { handleChange(e, 'title') }}
                        required
                    />
                </div>

                <div className="mb-1">

                    <label
                        htmlFor="content"
                        className="form-label">
                        Content
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={blog.content}
                        onChange={(e) => { handleChange(e, 'content') }}
                    // required
                    />
                </div>

                <div className="row text-center m-1">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col">
                        <Link
                            className="btn btn-danger"
                            to={"/"}>
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}
