const express = require('express')
const router = express.Router()
const User = require('../schema/User')
const bcrypt = require('bcrypt');
const confiq = require('../config')

router.get('/', async (req, res) => {
    try {
     const findUser = await User.find({})
     return  res.json(findUser).status(200)
    } catch (error) {
        return  res.json({'Sorry no data found on our database': error}).status(400)
    }
    
})


router.post('/', async (req, res) => {
    try {
        let {username, password} = req.body
          
        //Password hashing
         const hash = bcrypt.hashSync(password, Number(confiq.passwordSaltNo));

          const trynewUser = new User({
              username : username,
              password : hash
          })

          const newuser = await trynewUser.save()
          return res.json(newuser).status(200)
    } catch (error) {
        return  res.json({'Sorry, user cannot be registered': error}).status(400)

    }
})


module.exports = router