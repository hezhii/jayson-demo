const jayson = require('jayson');

const PORT = 8080;

const server = jayson.server({
  add: function (args, callback) {
    callback(null, args[0] + args[1]);
  },
  ping: function (args, callback) {
    console.log(`[${new Date().toLocaleString()}] - Received client ping`)
  }
})

server.tcp().listen(PORT, function () {
  console.log('Server listen on port', PORT);
});