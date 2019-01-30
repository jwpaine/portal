const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true}).catch((e) => {
	console.log(e)
})

//app
app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json({ type: '*/*'}));
router(app)

// server
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port)
console.log('server listening on: ', port)