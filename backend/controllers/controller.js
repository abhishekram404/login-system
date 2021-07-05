const User = require("../models/models");
const validate = require("../validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.users = async (req, res) => {
  console.log(req.cookies);
  console.log(req.headers);
  try {
    const allUsers = await User.find({}).select("-password");
    return res.status(200).send({ users: allUsers });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

exports.register = async (req, res) => {
  // console.log(req.body);
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { name, username, email, password, isAdmin } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      console.log(userExist);
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
      isAdmin,
    });

    const payload = {
      id: createdUser._id,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong! " });
    // res.status(500).send({ error: error.message });
  }
};

// Login functionality

exports.login = async (req, res) => {
  try {
    const { email, password } = await req.body;

    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      const validPassword = await bcrypt.compare(password, foundUser.password);
      if (validPassword) {
        const payload = {
          id: foundUser._id,
          email: foundUser.email,
          isAdmin: foundUser.isAdmin,
        };

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: 3600,
        });
        return res.cookie("jwt", token, {
          httpOnly: true,
          expires: new Date(Number(new Date().now) + 1 * 360000),
          secure: false,
        });
      }
      return res.send({ error: "Wrong email/password" }).status(400);
    }

    return res.send({ error: "Wrong email/password" }).status(400);
  } catch (err) {
    // return res.status(500).send({ error: "Something went wrong!!!" });
    return res.status(500).send({ error: err.message });
  }
};

exports.profile = (req, res) => {
  console.log("cookies", req.cookies);
  console.log("headers", req.headers);
  try {
    res.send({ user: req.verifiedUser }).header({});
  } catch (err) {
    res.send({ error: "Something went wrong!!!" }).status(500);
  }
};

exports.delete = async (req, res) => {
  const d = await User.deleteMany({});
  res.send(d);
};
