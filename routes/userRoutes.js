const express = require("express");
const router = express.Router();
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} = require("../controllers/userController");

router.get("/", getUsernames);
router.get("/new", createUsernameGet);
router.post("/new", createUsernamePost);

module.exports = router;
