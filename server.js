const express = require("express");
const { error } = require("node:console");

const app = express();


app.get("/", (req,res) => {
    res.send("Welcome to my channel"); 
})

app.get("/add", (req, res) => {
    const a = Number(req.query.a);

    const b = Number(req.query.b);

    if (isNaN(a) === true || isNaN(b) === true) {
        res.status(400).json({
            error : "Please provide a valid number",
        })
    };

    res.status(200).json({
        operator : "+",
        a,
        b,
        result : a + b,
    });
});

app.get("/subtract", (req, res) => {
    const a = Number(req.query.a);

    const b = Number(req.query.b);

    if (isNaN(a) === true || isNaN(b) === true) {
        res.status(400).json({
            error : "Please provide a valid number",
        })
    };

    res.status(200).json({
        operator : "-",
        a,
        b,
        result : a - b,
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})