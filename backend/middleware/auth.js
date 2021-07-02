const jwt = require("jsonwebtoken");

exports.verifyUserToken = async (req, res, next) => {
  console.log(req.headers);
  let token = await req.headers.authorization;

  if (!token)
    return res.status(400).send("Access denied / Unauthorized request");

  token = token.split(" ")[1];
  if (!token || token == null) {
    return res.status(400).send("Access denied / Unauthorized request");
  }
  let verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
  req.verifiedUser = verifiedUser;
  // console.log(verifiedUser);
  next();
};
