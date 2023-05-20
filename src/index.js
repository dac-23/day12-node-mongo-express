import express from "express";
const app = express();

// Handling the Client Request
// http://localhost:4000/
app.get("/", function (req, res) {
  res.json({});
});

// http://localhost:4000/users
app.get("/users/", (req, res) => {
  let list = [];
  let user1 = { id: 1, name: "rohit", email: "rohit@gmail.com" };
  let user2 = { id: 2, name: "rahul", email: "rahul@gmail.com" };
  list.push(user1);
  list.push(user2);

  res.json(list);
});

// http://localhost:4000/users/1
app.get("/users/1", (req, res) => {
  let user = {
    id: 1,
    name: "rohit",
    email: "rohit@gmail.com",
  };

  res.json(user);
});

app.listen(4000);
