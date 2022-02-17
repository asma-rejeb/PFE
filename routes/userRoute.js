const usercontroller = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup",usercontroller.signup);
router.post("/signin",usercontroller.signin);


module.exports = router;
