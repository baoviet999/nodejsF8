import express from "express";

const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
    res.send("Hello anh em");
});
app.listen(PORT, () => console.log("Run on port 5000"));
