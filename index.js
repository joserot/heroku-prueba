"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
var port = process.env.PORT || 3500;
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
