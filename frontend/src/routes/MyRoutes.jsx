/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { CreateBlog } from './../components/blog/CreateBlog.jsx';
import { EditBlog } from '../components/blog/EditBlog.jsx';

export const MyRoutes = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path='/create' element={<CreateBlog />} />
                    <Route path='/edit/:id' element={<EditBlog />} />
                </Routes>
            </BrowserRouter>

            <div className="container m-2 p-2">

                {children}

            </div>
        </>
    )
}
