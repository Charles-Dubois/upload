//dependances
const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "public/uploads" });
const users = require("../users.json");
const router = express.Router();

// paths & methods

router.get("/", (_req, res) => {
  res.send(
    "POST method to upload profil picture and username \n add body, form data with key profilePicture and username to post your profile picture"
  );
});

router.post("/", upload.single("profilPicture"), (req, res) => {
  const date = new Date().toString().slice(4, 24).replaceAll(" ", "/");
  const idPicture = `${req.body.username}-${date}-${req.file.originalname}`;
  // console.log(idPicture.toString());
  console.log(req.body);
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );
  users.push(req.body.username);

  res.send(
    `${req.body.username} your profile picture : \n${req.file.originalname} added!`
  );
});
module.exports = router;
