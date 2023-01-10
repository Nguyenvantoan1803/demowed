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

let deleteUser=async(req,res)=>{
    let id = req.body.id;
    let deleteuser =await userservice.deleteUser(id)
    return res.status(200).json({
        deleteuser
    })
}
let updateUser = async(req,res)=>{
    let iduser = req.body.id;
    let data = req.body;
    if(iduser){
        let edituser= await userservice.edituser(data)
        return res.status(200).json({
            edituser
        })
    }else{
        return res.status(200).json({
            errorCode:1,
            message:"Khong tim thay tai khoan"
        })
    }
}
let createUser = async(req,res)=>{
    console.log(req.body.email,'123')
    let emaildata = req.body.email;
    let checkemail = await userservice.checkemail(emaildata)
    if(checkemail){
        return res.status(200).json({
            errorCode:0,
            message:"Email này đã tồn tại"
        })
    }else{
        let create =await userservice.createuser(req.body);
        if(create){
            return res.status(200).json({
                create
            })
        }
        else{
            return res.status(200).json({
                errorCode:1,
                message:"Tạo người dùng thất bại"
            })
        }
    }
}
module.exports={
    authlogin:authlogin,
    getUser:getUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    createUser:createUser
}