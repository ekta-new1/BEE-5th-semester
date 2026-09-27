const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Chitkara");
    } else if (req.url == "/about") {
        res.end("Welcome to About Page");
    } else if (req.url == "/cart") {
        res.end("Welcome to Cart page");
    }
});
server.listen(8081, () => {
    console.log("Running in 8081");
});
