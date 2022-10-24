const jwt = require("jsonwebtoken")
const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const cookie = require("cookie-parser")


const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.json({ status: "error", error: "please enter userName and password" })
    else {
        db.query('SELECT * FROM users WHERE username = ?', [username], async (Err, result) => {
            if (Err) throw Err;
            if (!result.length || !await bcrypt.compare(password, result[0].password))return res.json({status:"error",error:"Tncorrect username or password"})
        else{
            

            const id =result[0].id
            

            const token =jwt.sign({id},process.env.JWT_SECRET,{
                expiresIn:process.env.JWT_EXPIRES

            }) 
            
            // const cookieOptions={
            //     expiresIn:new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
            //     httponly:true
            // }
            res.cookie("userSave",token);
        console.log(cookie)

            return res.json({status:"success",success:"User has Been Logged in"});
            
        }
        })
    }
}
module.exports = login