

const http = require('http');

const app = {};

//config
app.config = {
    port: 3000
};
// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    });
}

//handing
app.handleReqRes = (req,res) => {

    //get url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;

    //console.log(queryStringObject);

    //console.log(trimmedPath);
    res.end('Hello world');
};

// start the server
app.createServer();