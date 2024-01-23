const express = require("express");
const mongoose = require("mongoose");
// // Routes
const routes = require("./routers/index");

// Database
const { Database } = require("./utils");
Database.connectMongo();
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
