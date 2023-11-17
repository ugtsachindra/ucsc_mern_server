const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.post("/", async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    const user = await User.findOne({email});
    console.log(user)
    if (user) {
        if (user.password === password) {
            res.status(200).json({
                status:true,
                data:{
                    user
                }
            });
        } else {
            res.status(500).json({
                status:false,
                message:("wrong password")
            });
        }
        
    } else {
        res.status(500).json({
            status:false,
            message:("no such email")
        });
    }
  } catch (error) {
    res.status(500).json({
        status:false,
        message:(error)
    });
  }
  
});

module.exports = router;
