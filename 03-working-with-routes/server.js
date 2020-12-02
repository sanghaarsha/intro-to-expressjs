const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to Homepage.</h1> 
    <a href="./about">About Me</a> <br>
    <a href="./contact">Contact</a> <br>
    `);
});

app.get("/about", (req, res) => {
    res.send(`<h1>My Name is John Doe.</h1>
    <h2>I live in 1567 Market ST.</h2>
    <h2>This is my Blog.</h2>
    <a href="./">Home</a> <br>
    <a href="./contact">Contact</a> <br>
    `);
});

app.get("/contact", (req, res) => {
    res.send(`<h3>Name : John Doe <br>
    Email : John@email.com</h3>
    <a href="./">Home</a> <br>
    <a href="./about">About Me</a> <br>
    `);
});

app.listen(port, () => {
    console.log(`Express App : http://localhost:${port}`);
});
