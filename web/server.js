const path = require('path')
const express = require('express')
const oauth = require('./oauth.js')
const app = express()
const port = process.env.PORT || 3000
const fetch = require('node-fetch')

const LICHESS_BASE_URL        = "https://lichess.org"
const LICHESS_BOT_UPGRAGE_URL = LICHESS_BASE_URL + "/api/bot/account/upgrade"

app.get('/upgrade', (req, res) => {
	let user
	
	if(req.headers.cookie){
		let m = req.headers.cookie.match(/oauthUser=([0-9]+)/)
		
		if(m){
			let cookie = m[1]
			
			user = oauth.cookieToUser[cookie]
		}
	}
	
	if(!user){
		res.send(`Log in with your bot account to be able to upgrade.`)
		return
	}
	
	fetch(LICHESS_BOT_UPGRAGE_URL, {
		method: "POST",
		body: "",
		headers: {
			Authorization: `Bearer ${user.accessToken}`,
			Accept: "application/json"
		}
	}).then(response => response.text().then(content => res.send(`Upgrade status : <b>${content}</b> .`)))
})

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
${user ? "Logged in as <b>" + user.username + "</b> . <a href='/upgrade' rel='noopener noreferrer' target='_blank'>Request upgrade to bot</a> . <a href='/logout'>Log out</a> ." : "Make sure you are logged into lichess with your bot account, then <a href='/auth/lichess/bot'>login your bot using oauth</a> ." }
<hr>
For detailed instructions see <a href="https://lichess.org/forum/off-topic-discussion/hyper-easy-all-variants-lichess-bot-running-in-your-browser#1" rel="noopener noreferrer" target="_blank">this forum post</a> .
<hr>
	<div id="botSettings"></div>
<hr>
<div id="logs"></div>
<script src="https://unpkg.com/@easychessanimations/foo@1.0.33/lib/fooweb.js"></script>
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
			
			oldConsole.log(arg)
		
			items.unshift(argStr)

			while(items.length > 250) items.pop()

			app.x().a(items.map(item=>
				div()
					.pad(3).mar(3).bc("#eee").ffms()
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
	
	let botSettings = div().fl().a(
		Labeled("Make random moves", CheckBox({id: "useRandom"})),
		Labeled("Use book", CheckBox({id: "useBook"})).marl(10),
		Labeled("Ponder", CheckBox({id: "usePonder"})).marl(10),
		Labeled("Engine threads", Combo({id: "engineThreads", options: [...Array(8).keys()].map(key => ({value:(key+1), display: (key+1)}))})).marl(10),
		Labeled("Engine hash", Combo({id: "engineHash", options: [...Array(5).keys()].map(key => ({value:Math.pow(2, key+4), display: Math.pow(2, key+4)}))})).marl(10)
	)
	
	document.getElementById("botSettings").appendChild(botSettings.e)	
	
	console.log("Hyper Easy logs will be shown here, when reporting an error, always submit a copy of these logs")
	
	console.log("&nbsp;")
	
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
