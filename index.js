// import your http
const http = require("http")

// create server with HTTP
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

// initiate a port
const PORT = 4000;

// listen to server
server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))