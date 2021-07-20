const router = require("express").Router();
const controller = require("../controllers/controller");
const { verifyUserToken } = require("../middleware/auth");
router.get("/all", controller.users);
router.post("/delete", controller.deleteUser);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/checkUsernameAvailability", controller.checkUsername);
router.get("/profile", verifyUserToken, controller.profile);

router.delete("/delete", controller.delete);
module.exports = router;
