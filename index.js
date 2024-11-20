const http = require('http');
const server = http.createServer((req, res) =>{
    res.write('Hello programmers!');
    res.end();
});

server.listen(3000);

console.log('listing on port 3000');