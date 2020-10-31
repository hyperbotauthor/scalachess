const passport = require('passport')
const LichessStrategy = require('passport-lichess').Strategy

function initOauth(app, firestore, maxAge){
    app.use(require('cookie-parser')())
    app.use(require('body-parser').urlencoded({ extended: true }))
    const session = require('express-session')    
	let props = {
        secret: 'keyboard cat',
        resave: process.env.RESAVE == "true",
        saveUninitialized: process.env.SAVE_UNINITIALIZED == "true",
        cookie: {
            maxAge: maxAge || ( 1 * 366 * 31 * 24 * 60 * 60 * 1000 )
        }
    }
	console.log(props)
    app.use(session(props))
    app.use(passport.initialize())
    app.use(passport.session())
}

passport.serializeUser(function(user, cb) {
    cb(null, user)
})
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
})

function getHostProtAndUrl(props){
    let host = process.env.SITE_HOST || props.SITE_HOST || "localhost:3000"
    let prot = host.match(/^localhost:/) ? "http://" : "https://"
    let url = prot + host + props.authURL
    return [host, prot, url]
}

function addLichessStrategy(app, props){
    let [host, prot, url] = getHostProtAndUrl(props)
    passport.use(props.tag, new LichessStrategy({
        clientID: props.clientID,
        clientSecret: props.clientSecret,
        callbackURL: url + "/callback",
        scope: props.scope || ""
        },
        function(accessToken, refreshToken, profile, cb) {
            console.log(`id : ${profile.id}\naccessToken : ${accessToken}\nrefreshToken : ${refreshToken}`)
            profile.accessToken = accessToken
            return cb(null, profile)
        }
    ))

    app.get(props.authURL,
        passport.authenticate(props.tag))

    app.get(props.authURL + "/callback", 
        passport.authenticate(props.tag, { failureRedirect: prot + host + props.failureRedirect }),
            function(req, res) {
				console.log("auth req user", req.user)
		
				req.logIn(req.user, err => {					
					if (err){
						console.log("req login err", err)
						return next(err)
					}
					console.log("req login ok")
					req.session.save(err => console.log("req session save err", err))
					
					console.log("req session", req.session)
				})
		
                setTimeout(_=>res.redirect(prot + host + props.okRedirect), 2000)
            }
    )
}

module.exports = {
    initOauth: initOauth,
    addLichessStrategy: addLichessStrategy
}