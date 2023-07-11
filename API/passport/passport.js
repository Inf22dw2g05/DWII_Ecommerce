const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
require('dotenv').config();


// Serialization and Deserialization functions (required for persistent sessions)

passport.serializeUser(function (user, done) {

    done(null, user);

});

passport.deserializeUser(function (user, done) {

    done(null, user);
});


passport.use(new GitHubStrategy({

    clientID: process.env.GITHUB_CLIENT_ID,

    clientSecret: process.env.GITHUB_CLIENT_SECRET, // Update this line

    callbackURL: process.env.GITHUB_CALLBACK_URL

}, function (accessToken, refreshToken, profile, done) {

    profile.accessToken = accessToken;

    profile.refreshToken = refreshToken;

    return done(null, profile);

}));

module.exports = passport;