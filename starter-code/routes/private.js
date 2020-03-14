const express = require('express');
const router  = express.Router();
const ensureLogin = require('connect-ensure-login')

router.get('/private', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  res.render('auth/private', { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
