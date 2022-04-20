const express = require("express");
const app = express();
const port = 5000;

const users = [
    {id:1, name: "Riyad"},
    {id:2, name: "Shuvo"},
    {id:3, name: "Sangram"},
    {id:4, name: "Tazrian"},
    {id:5, name: "Ozil"}
]

app.get("/", (req, res) => {
  res.send(`Hello, This is Allah's World!
    Allah Created the whole Universe.`);
});

app.get('/home', (req, res) => {
    res.send("This is Home 🏡 ")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
  console.log(`Hey, Whose world is this? .......  Ans: ${port}`);
});
