const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')
const User = require('../models/user')
const config = require('../config')

// Create local strategy
const LocalLogin = new LocalStrategy({usernameField: 'email'}, function(email, password, done) {
	// verify username and passport, call done with user if correct
	// otherwise, call done with false
	console.log('locallogin')


	User.findOne({email: email}, function(err, user) {
		if (err) { 

			console.log('err')
			return done(err); 

		}

		if(!user) { return done(null, false); }

		// compare passwords
		user.comparePassword(password, function(err, isMatch) {
			if (err) { return done(err); }
			if(!isMatch) { return done(null, false)}

			return done(null, user);
		})
	})
})

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};


// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// check if user id in payload exists in DB
	// if yes, call done with that 
	// otherwise, call done without a user obj

	console.log('jwtLocal');

	User.findById(payload.sub, function(err, user) {
		if (err) { return done(err, false) }

		if (user) {
			done(null, user)
		} else {
			done(null, false)
		}
	})
})

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(LocalLogin);