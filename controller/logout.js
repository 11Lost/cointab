const logout = (req,res)=>{
    res.clesrCookie("userSave")
    res.redirect("/")
}
module.exports=logout