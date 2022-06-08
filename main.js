const express = require("express");
const http = require("http");

const user = require("./src/routes/user");

const app = express();

app.use("/api/v2/user/", user);

const server = http.createServer(app)
                    .listen(8080,() => {
                        console.log("Listening on http://localhost")
                    });                                         