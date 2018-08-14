const jayson = require('jayson');

const client = jayson.client.tcp({ port: 8080 });

client.request('add', [1, 1], function (err, res) {
  if (err) {
    throw err;
  }
  console.log('call "add" with params: [1, 1], result:', res.result);
})

// the third parameter is set to "null" to indicate a notification
client.request('ping', null, null, function (err, res) {
  if (err) {
    throw err;
  }
  console.log('ping');
})