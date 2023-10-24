const passport=require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
    //clientID:"xxxxxxxxxxxxxxxxxxxxxx", //prod
    clientSecret: "xxxxxxxxxxxxxxxxxxxxxxx"
    //clientSecret:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // prod
,
    callbackURL: "http://localhost:3000/google/callback"
    //callbackURL:"https://your-url/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));