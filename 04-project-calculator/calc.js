const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");
const port = 3030;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/bmi", (req, res) => {
    res.sendFile(path.join(__dirname, "BMI.html"));
});

app.post("/", (req, res) => {
    calcFormData = req.body;
    num1 = parseInt(calcFormData.num1);
    num2 = parseInt(calcFormData.num2);
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

app.post("/bmi", (req, res) => {
    bmiFormData = req.body;

    h = parseInt(bmiFormData.height);
    w = parseInt(bmiFormData.weight);

    if (isNaN(h) || isNaN(w)) {
        res.send("Invalid Input!!");
    } else {
        res.send(
            `Your Height: ${h} meters\nYour Weight: ${w} Kgs\n <h1>BMI: ${
                w / h
            }</h1>`
        );
    }
});

app.listen(port, () => {
    console.log(`App open in http://localhost/${port}`);
});
