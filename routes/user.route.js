const express = require('express');
const router = express.Router();
const User = require("./../models/User");

router.post("/", async function (req, res) {
    try {
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      const user = new User({name, password, email})
      user.save()
      res.status(200).json({
        status:true,
        data:{
            user
        }
    });
    } catch (error) {
        res.status(500).json({
            status:false,
            message:(error)
        });
    }

  });
  
  module.exports = router;