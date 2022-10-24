const db = require("../routes/db-config")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")


const logged = (res,req ,next)=>{
if(!req.cookie.userSave) return next();
try{
const decoded = jwt.verify(req.cookie.userSave
    ,process.env.JWT_SERCET);
db.query('SELECT * FROM users WHERE id = ?',[decoded.id],(err,result)=>{
    if(err) return next()
    req.user =result[0]
    return next()
})
}catch(err){
if (err)return next()
}


}
module.exports=logged