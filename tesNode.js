var fs = require("fs");
var obj = JSON.parse(fs.readFileSync("json.json"));
const WebSocket = require('ws');

console.log(obj[1])

//Abrindo conexão websocket
//Variaveis
var serverAdd = "localhost";
const wss = new WebSocket.Server({ port: 8000,host:serverAdd});
console.log("Host at: "+serverAdd);

wss.on('connection', function connection(ws,req) {
	//Funcao que recebe a mensagem do cliente (message) e trata
	//No nosso caso é uma string
	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		message = JSON.parse(message);
		//process the request
		if (message.tag == 'getindex'){
			ws.send(JSON.stringify (obj[message.index]));
		}
		else if (message.tag == 'getall'){
			ws.send(JSON.stringify(obj));
		}
	});
});
