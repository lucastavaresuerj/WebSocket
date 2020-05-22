async function sendMessage(tag, message) {
  const ws = new WebSocket('ws://localhost:8000');
  var send = {"tag": tag, "data": message}
  ws.onopen = function() {
    ws.send(JSON.stringify(send));
  }
  try {
    var response = await receiveMessage(ws);
  } catch (error) {
    var response = response.error
  }
  return response;
}

async function receiveMessage(ws) {
  var receivedMessage = await new Promise(function (resolve, reject) {
    ws.onmessage = function (ev) {
      try {
        resolve(JSON.parse(ev.data))
      } catch (error) {
        reject({"error": error})
      }
    }
  });
  ws.close()
  return receivedMessage;
}