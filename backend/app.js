import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/blogs", blogRoutes);

try {
    await db.authenticate();
    console.log("DB Connection Successfully ");
} catch (error) {
    console.log("DB Connection Wrong!. ", error.message);
}

app.get("/", (req, res) => {
    res.send("Welcome to My MERN Stack");
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
