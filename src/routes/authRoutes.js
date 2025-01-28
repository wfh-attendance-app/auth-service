const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, (req, res) => {
    res.json(req.user); // Current user's data is available in req.user
});

module.exports = router;
