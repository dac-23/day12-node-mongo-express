import express from "express";
const app = express();

// Handling the Client Request
// http://localhost:4000/
app.get("/", function (req, res) {
  let username = req.query.username;
  let password = req.query.password;
  res.json({ username: username, password: password });
});

// POST
// http://localhost:4000/user
app.post("/user/", (req, res) => {
  // logic is missign...
  // db logic
  res.json({ msg: "im post" });
});

app.listen(4000);
