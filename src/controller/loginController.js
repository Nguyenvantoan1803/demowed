import userservice from '../service/userservice'
let authlogin = async (req,res)=>{
    let email=req.body.email;
    let password = req.body.password;

    if(!email ||!password){
        return res.status(500).json({
            errorCode:1,
            message:"Missing inputs paramester"
        })
    }

    let userLogin = await userservice.handleUserLogin(email,password);
    return res.status(200).json({
        errorCode:userLogin.errorCode,
        message:userLogin.message,
        user: userLogin.user?userLogin.user:{}
    })
}
let getUser =async(req,res)=>{
    let id = req.body.id;
    if(!id){
        return res.status(200).json({
            errorCode:1,
            message:"Missing required paramter",
            user:[]
        })
    }
    let user = await userservice.getAllUser(id)
    return res.status(200).json({
        errorCode:0,
        message:"OK",
        user
    })
}

module.exports={
    authlogin:authlogin,
    getUser:getUser
}