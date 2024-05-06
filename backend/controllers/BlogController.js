// import model
import BlogModel from "./../models/BlogModel.js";

//**    DEFINE THE CRUD METHODS**//

// show all
export const index = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll({
            order: [["id", "DESC"]],
        });
        res.json(blogs);
    } catch (error) {
        res.json({
            message: "Couldn't Retrieve Blogs",
            error: error.message,
        });
    }
};

// show one
export const show = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(blog[0]);
    } catch (error) {
        res.json({
            message: "Couldn't Retrieve Blog",
            error: error.message,
        });
    }
};

// store
export const store = async (req, res) => {
    try {
        const blog = await BlogModel.create(req.body);
        res.json({
            message: "Blog Created Successfully",
            data: blog
        });
    } catch (error) {
        res.json({
            message: "Couldn't Create The Blog",
            error: error.message,
        });
    }
};

// update
export const update = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.json({
            message: "Blog Updated Successfully",
            data: await BlogModel.findAll({
                where: {
                    id: req.params.id,
                },
            }),
        });
    } catch (error) {
        res.json({
            message: "Couldn't Update Blog",
            error: error.message,
        });
    }
};

// delete
export const destroy = async (req, res) => {
    try {
        const blog = await BlogModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Blog Deleted Successfully",
            data: blog[0],
        });
    } catch (error) {
        res.json({
            message: "Couldn't Delete Blog",
            error: error.message,
        });
    }
};
