const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, This is Allah's World!
    Allah Created the whole Universe.`);
});

app.get('/home', (req, res) => {
    res.send("This is Home 🏡 ")
})

app.listen(port, () => {
  console.log(`Hey, Whose world is this? .......  Ans: ${port}`);
});
