const jayson = require('jayson');

const client = jayson.client.tcp({ port: 8080 });

client.request('add', [1, 1], function (err, res) {
  if (err) {
    throw err;
  }
  console.log('call "add" with params: [1, 1], result:', res.result);
})