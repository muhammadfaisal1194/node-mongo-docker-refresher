require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "running on docker!!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
