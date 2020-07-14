const config = require("../config/config");
const express = require("express");
const router = express.Router();
const User = require("../schema/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/user", async (req, res) => {
  try {
    const findUser = await User.find({}).populate("bookPublished");
    console.log(findUser);
    return res.status(200).json({ findUser });
  } catch (error) {
    return res
      .status(400)
      .json({ "Sorry no data found on our database": error });
  }
});

router.post("/signup", async (req, res) => {
  try {
    //Check if user already exit
    const alreadyRegistered = await User.findOne({ email: req.body.email });
    if (alreadyRegistered)
      return res.status(400).json({ message: "email already exits" });

    let { name, password, email } = req.body;

    //Password hashing
    const hash = bcrypt.hashSync(password, Number(config.passwordSaltNo));

    const trynewUser = new User({
      name: name,
      email: email,
      password: hash,
    });

    const newuser = await trynewUser.save();
    return res.status(200).json(newuser);
  } catch (error) {
    return res
      .status(400)
      .json({ "Sorry, user cannot be registered": error.message });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ user: `${email} is not found in the database` });

    if (user) {
      const comPassword = await bcrypt.compareSync(password, user.password);
      if (!comPassword) return res.status(400).json({ user: "Wrong Password" });

      const payload = {
        user: {
          id: user._id,
          user: user.username,
        },
      };

      jwt.sign(
        payload,
        config.JWT_Secret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res
            .status(200)
            .json({
              message: "login Successfull",
              authorization: token,
              user: user,
            })
            .headers(token);
        }
      );
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error: error.message, message: "Unable to sign in" });
  }
});
module.exports = router;
