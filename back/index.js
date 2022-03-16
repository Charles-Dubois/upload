// dependances
const express = require("express");
const app = express();
const path = require("path");
//*const multer = require("multer");
//*const upload = multer({ dest: "/public/uploads" });
// router
const usersRouter = require("./router/userRouter");
// app use
app.use(express.json());
app.use(express.static("public"));

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/user", usersRouter);

// paths with methods
app.get("/", (_req, res) => {
  res.send(
    "request to http://localhost:8000/user with GET method to start using our API"
  );
});

// 404 errors & listen
app.get("*", (_req, res) => {
  res.status(404).send("error 404");
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
