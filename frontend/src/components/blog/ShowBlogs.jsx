import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const URI = "http://localhost:4000/blogs/";

export const ShowBlogs = () => {

    const [blogs, setBlogs] = useState(null);

    const [backendMessage, setBackendMessage] = useState(null)

    const getBlogs = async () => {

        axios.get(URI)
            .then((res) => {
                setBlogs(res.data);
                setBackendMessage('Logs Retrieved Successfully');
            })
            .catch((error) => {

                setBackendMessage('Error Retrieving Blogs. ', error.message);
            })
            .finally(() => {
                console.log('Axios Request Ended');
            });

    }

    const deleteBlog = async (id) => {

        axios.delete(`${URI}${id}`)
            .then(() => {
                setBackendMessage('Logs Deleted Successfully');
                getBlogs();

            })
            .catch((error) => {

                setBackendMessage('Error Deleting Blogs. ', error.message);
            })
            .finally(() => {

            });

    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            {
                backendMessage &&
                <div className="alert alert-dark m-1" role="alert">
                    {backendMessage}
                </div>
            }
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <Link
                                className="btn btn-success "
                                to={"/create"}>
                                <i className="fa-solid fa-plus"></i> Create
                            </Link>
                        </div>
                        <table className="table table-dark table-striped border rounded p-2 m-1">

                            <thead className="text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs && blogs.map((blog) => (
                                        <tr key={blog.id}>
                                            <th scope="row">{blog.id}</th>
                                            <td>{blog.title}</td>
                                            <td>{blog.content}</td>
                                            <td>
                                                <Link
                                                    className="btn-sm btn-info btn"
                                                    to={`/edit/${blog.id}`}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </Link>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteBlog(blog.id)}
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
