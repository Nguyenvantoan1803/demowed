import PostUser from "../service/CreateUser"
let getHomePage = (req,res)=>{
    return res.render('homePage.ejs')
}

let CreateCRUD = (req,res)=>{
    return res.render('createUsers.ejs')
}

let   CreateCRUDUser= async(req,res)=>{
   const mess= await  PostUser.CreateUser(req.body)
    return res.render('displayuser.ejs',{data:mess})
}
let findAllUser = async(req,res)=>{
   const a = await PostUser.AllUser()
   return res.render('displayuser.ejs',{data:a})

}

let editUser = async(req,res)=>{
    let iduser = req.query.id;
    if(iduser){
        let edit = await PostUser.EditUserById(iduser)
        return res.render('edituser.ejs',{
            data:edit
        })
    }else {
        return res.send("User is not found")
        }
    }

let UpdataUser =async(req,res)=>{
    let data = req.body;
    let resual =await PostUser.EditUsernfomation(data)
    return res.render('displayuser.ejs',{data:resual})

 }
 
 
let deleteUsers = async(req,res)=>{
        let id = req.query.id;
        if(id){
          const resual =await PostUser.Deleteuser(id)
          return res.render('displayuser.ejs',{data:resual})
           
        }
        else{
            return res.send("Delete that bai")
        }
}
module.exports={
    getHomePage:getHomePage,
    CreateCRUD:CreateCRUD,
    CreateCRUDUser:CreateCRUDUser,
    findAllUser:findAllUser,
    editUser:editUser,
    UpdataUser:UpdataUser,
    deleteUsers:deleteUsers,


}