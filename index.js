const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/api/v1/instagram", (req, res) => {
  const instagram = {
    userName: "Gokulan",
    followers: 50,
    follows: 10,
    Date: Date.now(),
  };

  res.status(200).json(instagram);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebook = {
    userName: "Gokulan",
    followers: 40,
    follows: 10,
    Date: format("dd/MM/yyyy", new Date()),
  };

  res.status(200).json({ facebook });
});

app.get("/api/v1/linkedin", (req, res) => {
  const facebook = {
    userName: "Gokulan",
    followers: 10,
    follows: 10,
    Date: Date.now(),
  };

  res.status(200).json({ facebook });
});

app.get("/api/get", (req, res) => {
  res.status(200).send("Hi");
});

app.get("/api/v1/:gokul", (req, res) => {
  res.status(200).json({ params: req.params.gokul });
});

app.listen(PORT, () => {
  console.log("listening on port 4000");
});
