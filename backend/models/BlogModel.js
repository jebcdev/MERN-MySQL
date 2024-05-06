//  import db connection
import db from "./../database/db.js";
// import Sequelize
import { DataTypes } from "sequelize";

// model definition
const BlogModel = db.define("blogs", {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
});

export default BlogModel;
