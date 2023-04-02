require("dotenv").config();
const express = require("express");
const movieRoutes = require("./src/routes/movieRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Movie List app");
});

app.use("/api/movies", movieRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
