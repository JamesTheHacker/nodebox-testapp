#!/usr/bin/env node

const http = require('http');

const reqHandler = (req, resp) => {
	resp.end("Congratulations, it worked :)");
};

http.createServer(reqHandler).listen(5001);
http.createServer(reqHandler).listen(5002);
http.createServer(reqHandler).listen(5003);
