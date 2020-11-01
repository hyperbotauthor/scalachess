
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
let USER = ${user ? JSON.stringify(user, null, 2) : "null"}
document.title = "Hyper Easy ${user ? user.id : ""}"
</script>
<script src="https://unpkg.com/@easychessanimations/uci@1.0.29/lib/uci.js"></script>	
<script src="stockfishwasm/stockfish.js"></script>
<script src="utils.js"></script>
<script src="outopt.js"></script>
<script src="bot.js"></script>
${user ? "Logged in as <b>" + user.username + "</b> . <a href='/logout'>Log out</a> ." : "Make sure you are logged into lichess with your bot account, then <a href='/auth/lichess/bot'>login your bot using oauth</a> ." }
<hr>
<div id="logs"></div>
<script src="https://unpkg.com/@easychessanimations/foo@1.0.30/lib/fooweb.js"></script>
<script>
	let oldConsole = console
	
	let items = []
	
	let app = div().h(500).ovfys()
	
	function newLog(...args){
		args.forEach(arg => {
			let argStr = arg.toString()
			
			if(typeof arg == "object"){
				try{
					//argStr = JSON.stringify(arg)
				}catch(err){}
			}
			
			oldConsole.log(argStr)
		
			items.unshift(argStr)

			while(items.length > 100) items.pop()

			app.x().a(items.map(item=>
				div()
					.pad(3).mar(3).bc("#eee")
					.html(item)
			))
		})
	}
	
	console = {
		log: newLog,
		warn: newLog,
		error: newLog,
		info: newLog
	}
	
	document.getElementById("logs").appendChild(app.e)	
	
	console.log("Welcome to Hyper Easy !")
</script>
<hr>
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
