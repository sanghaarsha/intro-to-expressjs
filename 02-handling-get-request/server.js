const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send(`<h1>Hello from Express App.</h1>`);
});

app.listen(port, () => {
    console.log(`Express app, Listening on http://localhost:${port}`);
});
