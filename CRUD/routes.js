const User=require('./controllers/user')
module.exports=function(app){
    app.use("/user",User)
}
const Admin=require('./controllers/admin')
module.exports=function(app){
    app.use("/admin",Admin)
}
