const express = require("express");
const router = express.Router();
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames,
} = require("../controllers/userController");

router.get("/", getUsernames);
router.get("/new", createUsernameGet);
router.post("/new", createUsernamePost);
router.get("/delete", deleteAllUsernames);

module.exports = router;
