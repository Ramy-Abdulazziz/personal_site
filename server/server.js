const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = requre("mongoose");

const port = 8000;
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//connect to MongoDB
const mongoDB = "mongodb://127.0.0.1:27017/personal_site";
mongoose.connect(mongoDB, {
  userNewUrlParser: true,
  userUnifiedTopology: true,
});

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(
    console,
    "MongoDB connection error - check database settings"
  )
);

db.on("connected", () => {
  console.log("Successfull connection to database");
});

//start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//handle server termination
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Server closed. Database instance disconnected");
    process.exit(0);
  });
});
