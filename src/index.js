import express from "express";
import cors from "cors";
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// http://localhost:4000/
app.get("/", function (req, res) {
  res.json({});
});

// GET
// GET ME ALL THE USERs
app.get("/users");

// GET
// GET ME USER WHER ID IS PARAM
app.get("/users/:id");

// POST
// Create New User
// http://localhost:4000/user
app.post("/user/");

// DELETE
// DELETE ONE USER
app.delete("/user/:id");

app.listen(4000);
