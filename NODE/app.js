const http=require("http");  //built-in module in Node.js to create a server and handle HTTP requests and responses.
const server=http.createServer((req,res)=>{ //createServer() is a function provided by the HTTP module.
    res.end("Masai");  //This sends a response back to the browser.
});
server.listen(8080,()=>{        //Start listening for incoming requests.
console.log("Running in 8080");        //8080 is the port number.
});


//The callback function will run whenever a request comes to your server.
// It receives two important objects:
// req and res 

// req means request - It contains information about the request coming from the client/browser.
// res means response - It is used to send a response back to the client/browser.