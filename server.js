var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 1337});

console.log('INIT - Listening on 1337.');

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
	console.log('ws is: ' + ws);
    });
    ws.send('something');
});