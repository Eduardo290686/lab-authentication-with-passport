const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/private', (req, res, next) => {
  res.render('auth/private');
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
