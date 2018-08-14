const jayson = require('jayson');

const PORT = 8080;

const server = jayson.server({
  add: function (args, callback) {
    callback(null, args[0] + args[1]);
  }
})

server.tcp().listen(PORT, function () {
  console.log('Server listen on port', PORT);
});