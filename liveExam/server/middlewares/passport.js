var GoogleStrategy   = require( 'passport-google-oauth2' ).Strategy;
var Strategy = require('passport-facebook').Strategy;

exports.passportMiddleware = function(passport,app) {


    // API Access link for creating client ID and secret:
    var GOOGLE_CLIENT_ID      = "546187922156-b18o2nk40tb68fq19lg2j2ddmd0olucu.apps.googleusercontent.com"
      , GOOGLE_CLIENT_SECRET  = "pFMovoDUH7jj_Zlim_0synGg";


    // Use the GoogleStrategy within Passport.

    passport.use(new GoogleStrategy({
        clientID:     GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://www.liveexam.tk/auth/google/callback",
       // callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {                 
          // sets req.user here
          return done(null, profile);
      }));
    

    // setting up client id and client secret

    passport.use(new Strategy({
        clientID: '401873783605095',
        clientSecret: '93f8cef4c3bc1ac06fbeddf6568d4e38',
        callbackURL: 'http://www.liveexam.tk/login/facebook/return',
        /*///////////////////////////////////// Localhost ////////////////////////////////////////
        clientID: '1977813652507076',
        clientSecret: '9c7b9d98afe44e136845ab6f4460ec39',
        callbackURL: 'http://localhost:3000/login/facebook/return',*/
        enableProof: true,
        profileFields: ['id', 'emails', 'name']
      },
      function(accessToken, refreshToken, profile, cb) {
        // req.user set here
        return cb(null, profile);
      }));


    // Configure Passport authenticated session persistence.
    passport.serializeUser(function(user, cb) {
      cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
      cb(null, obj);
    });

    // cookie parser and express-sessions required for passportjs sessions
    app.use(require('cookie-parser')());
    app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

    // Initialize Passport and restore authentication state, if any, from the
    // session.
    app.use(passport.initialize());
    app.use(passport.session());


}
