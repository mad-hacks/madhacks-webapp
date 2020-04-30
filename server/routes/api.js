const express = require("express");
const mail = require("@sendgrid/mail");
const { contact, register } = require("../models/mongouser.js");

const app = express();

mail.setApiKey(process.env.API_KEY);

app.post("/contact", (req, res) => {
  contact.create(req.body).then(() => {
    res.send({
      status: "ok",
    });
  });

  const msg = {
    to: process.env.USER,
    from: process.env.USER,
    subject: "Contact Section",
    text:
      "Name: " +
      JSON.stringify(req.body.name) +
      ", Email: " +
      JSON.stringify(req.body.email) +
      ", Phone No: " +
      JSON.stringify(req.body.phoneno) +
      ", Description: " +
      JSON.stringify(req.body.description),
  };
  mail.send(msg);
});

app.post("/register", (req, res) => {
  register.create(req.body).then(() => {
    res.send({
      status: "ok",
    });
  });

  const mesg = {
    to: process.env.USER,
    from: process.env.USER,
    subject: "Register Section",
    text:
      "Name: " +
      JSON.stringify(req.body.student_name) +
      ", Email: " +
      JSON.stringify(req.body.student_email) +
      ", College: " +
      JSON.stringify(req.body.college) +
      ", Branch: " +
      JSON.stringify(req.body.branch) +
      ", Year:" +
      JSON.stringify(req.body.year) +
      ", Mobile No: " +
      JSON.stringify(req.body.mobno) +
      ", Interest: " +
      JSON.stringify(req.body.area_of_interest) +
      ", Hobbies: " +
      JSON.stringify(req.body.hobbies),
  };
  mail.send(mesg);
});

module.exports = app;
