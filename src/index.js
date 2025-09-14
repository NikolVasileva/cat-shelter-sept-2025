import http from 'http';
import fs from 'fs/promises';

async function homeView() {
    const html = await fs.readFile("./src/views/home/index.html", {encoding: "utf-8"})

    return html
}

async function addBreadView() {
    const html = await fs.readFile("./src/views/addBreed.html", {encoding: "utf-8"})

    return html
}

async function addCatView() {
    const html = await fs.readFile("./src/views/addCat.html", {encoding: "utf-8"})

    return html
}

const server = http.createServer(async (req, res) => {

if (req.url === "/") {
    const homeHtml = await homeView()

    res.writeHead(200, {
        "content-type": "text/html",
    });

    res.write(homeHtml)

} else if (req.url === "/styles/site.css") {
    const siteCss = await fs.readFile("./src/styles/site.css", {encoding: "utf-8"})
    
    res.writeHead(200, {
        "content-type": "text/css",
    })

    res.write(siteCss)

} else if (req.url === "/cats/add-breed") {
    const html = await addBreadView()

    res.writeHead(200, {
        "content-type": "text/html"
    })

    res.write(html)

} else if (req.url === "/cats/add-cat") {
    const html = await addCatView()

    res.writeHead(200, {
        "content-type": "text/html"
    })

    res.write(html)
}

    res.end();
});

server.listen(3000);
console.log(`Server is listening to http://localhost:3000...`);

