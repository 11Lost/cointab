const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")

const signup = async (req, res) => {
    const { username, email, password: Npassword } = req.body
    if (!username || !email || !Npassword) return res.json({ status: "error", error: "Please Enter Your User Name ,Email and Password" })
    else {
        console.log(email, username)
        db.query('SELECT email FROM users WHERE email=?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({ status: "error", error: "Email has already been registered" })
            else {
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password)
                db.query('INSERT INTO users SET ?', { username: username, email: email, password: password }, (error, results) => {
                    if (error) throw error;
                    return res.json({ status: "success", success: "User has been Signup" })
                })
            }
        })
    }
}
module.exports = signup