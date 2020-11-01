
const path = require('path')
const express = require('express')
const oauth = require('./oauth.js')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	let user
	
	if(req.headers.cookie){
		let m = req.headers.cookie.match(/oauthUser=([0-9]+)/)
		
		if(m){
			let cookie = m[1]
			
			user = oauth.cookieToUser[cookie]
		}
	}
	res.send(`
<script>
const USER = ${user ? JSON.stringify(user, null, 2) : "null"}
document.title = "hypereasy ${user ? user.id : ""}"
</script>
<script src="utils.js"></script>
<script src="bot.js"></script>
${user ? "logged in as <b>" + user.username + "</b> <a href='/logout'>log out</a>" : "<a href='/auth/lichess/bot'>login</a>" }
`)
})

app.get('/logout', (req, res) => {
	res.clearCookie("oauthUser")
	res.redirect("/")
})

app.use('/', express.static(__dirname))
 
const firestore = null // provide firestore instance for persistance
 
const maxAge = 31 * 24 * 60 * 60 * 1000 // cookie max age in ms, optional, default is 1 year
 
oauth.initOauth(app, firestore, maxAge)

oauth.addLichessStrategy(app, {
    tag: "lichess-bot",
    clientID: process.env.LICHESS_BOT_CLIENT_ID,
    clientSecret: process.env.LICHESS_BOT_CLIENT_SECRET,
    authURL: "/auth/lichess/bot",
    scope: "challenge:read challenge:write bot:play",
    failureRedirect: "/?lichessbotlogin=failed",
    okRedirect: "/?lichessbotlogin=ok"
})

app.listen(port, _ => {
    console.log(`Hypereasy listening on port ${port} !`)
})
