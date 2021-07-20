// auth.js (middleware for verifying jwt token in cookies)

const jwt = require("jsonwebtoken");

exports.verifyUserToken = async (req, res, next) => {
  console.log("cookies", req);
  console.log("headers", req.headers);

  try {
    let token = (await req.cookies["jwt"]) || "";

    if (!token) {
      return res.status(400).send("Access denied / Unauthorized request");
    }

    let verifiedUser = await jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = verifiedUser;
    console.log(verifiedUser);
    next();
  } catch (err) {
    return res.status(500).send({ error: "Something went wrong!!!" });
  }
};
