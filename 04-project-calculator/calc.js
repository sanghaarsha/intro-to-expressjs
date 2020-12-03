const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");
const port = 3030;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
    jsonFormData = req.body;
    num1 = parseInt(jsonFormData.num1);
    num2 = parseInt(jsonFormData.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid Input!!");
    } else {
        res.send(
            `Num1 = ${num1}\nNum2 = ${num2}\n\n ${num1}\n+${num2}\n ---\n ${
                num1 + num2
            }`
        );
    }
});

app.listen(port, () => {
    console.log(`App open in http://localhost/${port}`);
});
