const path = require("path");
const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send("Hello");
});
app.listen(port, () => {
    console.log(`App Open in http://localhost:${port}`);
});
