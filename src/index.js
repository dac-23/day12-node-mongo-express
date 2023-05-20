import express from "express";
const app = express();

// Handling the Client Request
// http://localhost:4000/
app.get("/", function (req, res) {
  let username = req.query.username;
  let password = req.query.password;
  res.json({ username: username, password: password });
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
// http://localhost:4000/users/2
app.get("/users/:id", (req, res) => {
  let user = {
    id: req.params.id,
    name: "rohit",
    email: "rohit@gmail.com",
  };

  res.json(user);
});

// http://localhost:4000/posts
app.get("/posts/", (req, res) => {
  let list = [];
  let post1 = {
    id: 1,
    title: "afda asdfaf asfasfdsa",
    body: "asdfaf asf adsfads",
  };
  let post2 = {
    id: 2,
    title: "afda asdfaf asfasfdsa",
    body: "asdfaf asf adsfads",
  };

  list.push(post1);
  list.push(post2);

  res.json(list);
});

// http://localhost:4000/posts/1
// http://localhost:4000/posts/2
app.get("/posts/:postid", (req, res) => {
  let post = {
    id: req.params.postid,
    title: "adfaf",
    body: "asdf dfads fadsf asdfasdf asdfasd fdasf ads",
  };

  res.json(post);
});

app.listen(4000);
