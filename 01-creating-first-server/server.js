const express = require("express");
const app = express();
const port = 3030;

app.listen(port, () => {
    console.log(`The first express app, Listening at http://localhost:${port}`);
});
