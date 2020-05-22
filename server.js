var fs = require("fs");
const WebSocket = require('ws');

var data = JSON.parse(fs.readFileSync("data.json"));
console.log(data)

var serverAdd = "localhost";
const wss = new WebSocket.Server({port: 8000, host:serverAdd});
console.log("Host at: " + serverAdd);

wss.on('connection', function connection(ws, req) {
	ws.on('message', function incoming (message) {
		console.log('received: %s', message);
    message = JSON.parse(message);
    var tag = message.tag;
    var messageData = message.data;
    switch (tag) {
      case 'getIndex': 
        getIndex(ws, messageData);
        break;
      case 'getAll':
        getAllData(ws, messageData);
        break;
      default:
        sendWsError(ws, tag);
        break;
    }
	});
});

function getIndex(ws, message) {
	sendWs(ws, data[message.index]);
}

function getAllData(ws, message) {
  sendWs(ws, data)
}

function sendWs(ws, response) {
  console.log('Send: ' + JSON.stringify(response));
  ws.send(JSON.stringify(response));
}

function sendWsError(ws, tag) {
  console.log('Erro on tag: ' + tag)
  sendWs(ws, {"error": 'Erro on tag: ' + tag})
}