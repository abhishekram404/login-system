const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("ON ROOT");
});

module.exports = router;
