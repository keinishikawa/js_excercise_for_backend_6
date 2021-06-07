const router = require("./router/index.js");
const express = require("express");

const app = express();
const PORT = 3001;



app.listen(PORT);
app.set("view engine","ejs");
app.use(express.static("public"));

app.use("/",router);