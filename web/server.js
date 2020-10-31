
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send(`user: _${req.user}_<br>
<a href="/auth/lichess/bot">login</a>
`)
})

app.use('/', express.static(__dirname))

const oauth = require('@aestheticbookshelf/oauth')
 
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
