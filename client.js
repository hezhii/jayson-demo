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

const requests = [
  client.request('does_not_exist', [10, 5]),
  client.request('add', [1, 1]),
  client.request('add', [0, 0], null) // a notification
]

client.request(requests, function (err, res) {
  if (err) {
    throw err
  };
  console.log('res', res); // all responses together
});