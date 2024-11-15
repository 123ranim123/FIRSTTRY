const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const userRoutes = require("./routes/user.router");
app.use("/users", userRoutes);
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Databese connected sucessfully ....");
});

app.listen(process.env.port, () => {
  console.log(` app listening on port ${process.env.port}`);
});
