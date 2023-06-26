// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.write('Hello World!');
//   res.end();

// if (req.url == '/') {
//   //check the URL of the current request

//   // set response header
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   // set response content
//   res.write('<html><body><p>This is home Page.</p></body></html>');
//   res.end();
// } else if (req.url == '/student') {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<html><body><p>This is student Page.</p></body></html>');
//   res.end();
// } else if (req.url == '/admin') {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<html><body><p>This is admin Page.</p></body></html>');
//   res.end();
// } else res.end('Invalid Request!');
// });
// server.listen(8000);

// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//   res.send('<html><body><h1>Hello Worldb</h1></ody></html>');
// });

// app.post('/submit-data', function (req, res) {
//   res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//   res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//   res.send('DELETE Request');
// });

// const server = app.listen(5000, function () {
//   console.log('Node server is running..');
// });

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('my_event', (data) => {
  console.log('data received successfully.' + data);
});
eventEmitter.emit('my_event', 123);
