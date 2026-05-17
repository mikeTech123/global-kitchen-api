const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const recipeRoutes = require("./config/routes/recipeRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/recipes", recipeRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Server Error",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});