import express from "express";
import cors from "cors";
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Whitelisting all the request
app.use(cors());

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
  console.log(req.body);
  res.json({ msg: "im post" });
});

app.listen(4000);
