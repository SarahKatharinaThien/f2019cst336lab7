const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const request = require("request");

// routes
app.get("/", function (req, res) {
    request('https://pixabay.com/api/?key=13891908-73259bb3df0ab4191e8002f0c', function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
       console.log(response);
    });
    console.log("it works!");
});

// starting server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express Server is running...");
});