const server = require('./app');
const hostname = '127.0.0.1';
const port = 8484;
// write your code here

server.listen(port, hostname, function(success, error) {
    console.log('Server started on localhost: ' + port)
});