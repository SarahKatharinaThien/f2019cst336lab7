const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const request = require("request");

// routes
app.get("/", function (req, res) {
    request('https://pixabay.com/api/?key=13891908-73259bb3df0ab4191e8002f0c', function (error, response, body) {
       if (!error && response.statusCode == 200) { // no issues in the request

           let parsedData = JSON.parse(body); // converts String to JSON

           let randomIndex = Math.floor(Math.random() * parsedData.hits.length);
           // res.send(`<img src='${parsedData.hits[randomIndex].largeImageURL}'>`);
           res.render("index", {"image": parsedData.hits[randomIndex].largeImageURL});

       } else {
           console.log(response.statusCode);
           console.log(error);
       }
    });
});

// starting server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express Server is running...");
});