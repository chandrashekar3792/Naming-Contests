const config = require('./config');
console.log(config.port,config.nodeEnv,config.logStars('Server started'));
const fs=require('fs');

let express=require('express');
let router=require('./api');
const server=express();
server.set('view engine','ejs');

server.get('/',(req,res)=>{
	res.render('index',{
		content:'Hello Express and <em> EJS</em>'
	});
});
server.use('/api',router);
server.use(express.static('public'));
server.listen(config.port,()=>{
	console.info('Express listening on port',config.port);
});