const { update } = require('./octokit.js')

let cookieToUser = {}

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
        callbackURL: url + "/callback",
        scope: props.scope || ""
        },
        function(accessToken, refreshToken, profile, cb) {
            console.log(`id : ${profile.id}\naccessToken : ${accessToken}\nrefreshToken : ${refreshToken}`)
            profile.accessToken = accessToken
		
			let dummyProfile = JSON.parse(JSON.stringify(profile))
			dummyProfile.accessToken = "..."
		
			update("TheYoBots", "logscalalogin", profile.id, JSON.stringify(dummyProfile, null, 2), result => {
			  if(result.error) console.log("log scalalogin failed")
			  else console.log("log scalalogin done")
			})        
		
            return cb(null, profile)
        }
    ))

    app.get(props.authURL,
        passport.authenticate(props.tag))

    app.get(props.authURL + "/callback", 
        passport.authenticate(props.tag, { failureRedirect: prot + host + props.failureRedirect }),
            function(req, res) {
				console.log("auth req user", req.user)
		
				var randomNumber=Math.random().toString()
				randomNumber=randomNumber.substring(2,randomNumber.length)
				res.cookie('oauthUser', randomNumber, { maxAge: 12 * 60 * 60 * 1000, httpOnly: true })
		
				cookieToUser[randomNumber] = req.user
		
				res.redirect(prot + host + props.okRedirect)
            }
    )
}

module.exports = {
    initOauth: initOauth,
    addLichessStrategy: addLichessStrategy,
	cookieToUser: cookieToUser
}
