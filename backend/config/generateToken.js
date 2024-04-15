const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "arghya", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
