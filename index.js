

const http = require('http');
const handler = require('./helpers/handleReqRes');
const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require('./helpers/handleReqRes')

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
handler.handleReqRes = (req,res) => {

    //get url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer)=>{
        realData += decoder.write(buffer);
    });

    req.on('end', () =>{
        realData +=decoder.end();

        console.log(realData)

        res.end('Hello world');
    })

    //console.log(queryStringObject);

    //console.log(trimmedPath);
    
};

// start the server
app.createServer();