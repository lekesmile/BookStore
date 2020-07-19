const config = require("../config/config");
const jwt = require("jsonwebtoken");

const authVerification = {
  verifytoken: function (req, res, next) {
    const token = req.headers["authorization"];
    // Check for token
    if (!token) return res.status(401).json({ msg: "authorizaton denied" });

    try {
      // Verify token
      const decoded = jwt.verify(token, config.JWT_SECRET);
      // Add user from payload
      req.user = decoded.user;
      next();
    } catch (e) {
      return res.status(403).json({ msg: "Token is not valid" });
    }
  },
};

module.exports = authVerification;
