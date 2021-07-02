const User = require("../models/models");
const validate = require("../validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const { name, username, email, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        error:
          "The email that you entered is already associated with another account. Please Login.",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createdUser = await User.create({
      name: name.trim(),
      username: username.replace(/\s/g, ""),
      email: email.trim(),
      password: hashedPassword,
    });

    const payload = { id: createdUser.id };
    const token = jwt.sign(payload, "secret_phrase");

    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      const validPassword = await bcrypt.compare(password, foundUser.password);
      if (validPassword) {
        const payload = { id: foundUser.id };
        const token = jwt.sign(payload, "secret_phrase");
        return res
          .status(200)
          .header("auth-token", token)
          .send({ token: token });
      }
      return res.send("Wrong email/password");
    }

    return res.status(404).send("Wrong email/password.");
  } catch (err) {
    return res.status(500).send("Something went wrong!!!");
  }
};

exports.profile = (req, res) => {
  res.send("welcome to your profile");
};

exports.delete = async (req, res) => {
  const d = await User.deleteMany({});
  res.send(d);
};

//404 - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQ4NzJjMzE1NzM1MzY5MmE5MjU4MyIsImlhdCI6MTYyNTEzMDc5Nn0.C3lkNcqiwigY_Wu6grkMQUE7W7g7vE3HCxz0ryhN0RE
