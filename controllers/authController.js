const fs = require("fs");
const path = require("path");

exports.getContactUs = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
};

exports.success = (req, res) => {
  res.send("Form successfuly filled");
};

exports.login = (req, res) => {
  res.send(`<form method="GET" action="/get-msg" onsubmit='localStorage.setItem("username",document.getElementById("login").value)' >
        <input id="login" name="username" type="text" placeholder="Enter Name"/>
        <button type="submit">Submit</button>
    </form>`);
};

exports.getMessages = (req, res) => {
  // res.send("login page");
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = `No chat Exist`;
    }
    res.send(`<h3>${data}</h3> <form action="/msg" onsubmit='document.getElementById("username").value = localStorage.getItem("username")' method="POST">
        <input id="username" name="username" type="hidden" placeholder="Enter Name"/>
        <input id="message" name="message" type="text" placeholder="Enter Msg"/>
        <button type="submit">Submit</button>
    </form>`);
  });
};

exports.messages = (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile(
    "username.txt",
    ` ${req.body.username} : ${req.body.message}`,
    { flag: `a` },
    (err) => (err ? console.log(err) : res.redirect("/get-msg"))
  );
  //   res.send("message sent");
};
