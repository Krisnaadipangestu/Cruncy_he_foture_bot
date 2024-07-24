require('dotenv').config()
const Pepesan = require("pepesan");
const router = require("./router");
const { ALLOWED_NUMBERS } = process.env;

(async () => {
    const config = {
        allowedNumbers: ALLOWED_NUMBERS ? ALLOWED_NUMBERS.split(',') : null,
        browserName: 'Dewakoding App'
    }
    const pepesan = Pepesan.init(router, config)
    await pepesan.connect()
})()
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
