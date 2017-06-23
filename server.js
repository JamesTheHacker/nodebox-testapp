#!/usr/bin/env node

const http = require('http');
const port = 5001;

const requestHandler = (req, resp) => {
	resp.end("Hello, from NodeBox Test App");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if(err) return console.log("Something bad happened!", err);
	console.log(`Server is listening on port: ${port}`);
})