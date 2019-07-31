const router = require("express").Router();
const dbController = require("./../../controller/dbController");

router.route("/")
  .post(dbController.newUser)

module.exports = router;