const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { restart } = require("nodemon");

const port = 8000;
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//connect to MongoDB sss

const mongoDB = "mongodb://127.0.0.1:27017/personal_site";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//Validate Database connection
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

//Create session store
const store = new MongoDBStore({
  uri: mongoDB,
  databaseName: "personal_site",
  collection: "userSessions",
});

store.on("error", function (error) {
  console.error("Error connecting to session storage");
});

// Create Session Storage for usersessions
app.use(
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

//Define Models
const Thread = require("./models/thread");
const User = require("./models/user");
const Prompt = require("./models/userPrompt");

//Application Entry point
app.post("/login", async (req, res) => {
  try {
    // if (req.session) {
    //   console.log('session already created')
    //   console.log(req.session)
    //   res
    //     .status(200)
    //     .json({ message: "Session already exists - user already logged in" });
    // } else {
      const userName = req.body.username;
      console.log(req.body.username);
      let user = await User.findOne({ userName: userName }).exec();

      if (user) {
        res.status(403).json({ message: "User name already taken" });
      } else {
        const newUserDetails = {
          userName: userName,
        };
        const newUser = new User(newUserDetails);
        await newUser.save();
        req.session.userName = userName;
        req.session.userID = newUser._id;
        res
          .status(200)
          .json({ message: "User session create- sucessful log in" });
      }
    // }
  } catch (err) {
    console.error("error creating user session", err);
  }
});

//retrieve user threads
app.get("/threads", async (req, res) => {
  try {
    if (!req.session) {
      res
        .status(400)
        .json({ message: "Cant access user threads without secure session" });
    }
    const userID = req.session.userID;
    const threads = await Thread.find({ user: { $in: userID } }).exec();
    res.status(200).json({ threads });
  } catch (err) {
    console.error("Error retrieving user threads - try again");
  }
});

//retrieve thread prompts
app.get("/:tid/prompts", async (req, res) => {
  try {
    if (!req.session) {
      res
        .status(400)
        .json({ message: "Cant access user message without secure session" });
    }
    const tid = req.params.tid;
    const prompts = await Prompt.find({ thread: { $in: [tid] } });
    res.status(200).json(prompts.sort((a, b) => b.timeStamp - a.timeStamp));
  } catch (err) {
    console.error("Error retrieving thread messages - try again");
  }
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
