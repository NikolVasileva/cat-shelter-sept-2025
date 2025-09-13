import http from "http"

const server = http.createServer((req, res) => {
    res.write("Hey");

    res.end();
});

server.listen(6000);
console.log("Server is listening to http://localhost:6000...")

