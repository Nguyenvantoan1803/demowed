import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
let checkemail = (email)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            console.log(email,'123')
            let user = await db.User.findOne({
                where: {email:email}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
            
        } catch (error) {
            reject(error)
        }
    })

}
let handleUserLogin = (email,password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let userData={};
            let check = await checkemail(email)
            if(check){
                let user =await db.User.findOne({
                    attributes:['email','roleId','password'],
                    where: {email:email},
                    raw:true 
                })
                if(user){
                  let checkpassword=  bcrypt.compareSync(password ,user.password);
                  if(checkpassword){
                    userData.errorCode=0;
                    userData.message=`OK`;
                    delete user.password
                    userData.user=user;
                  }else{
                    userData.errorCode=1;
                    userData.message=`Password is incorrect `;
                  }
                }
                else{
                    userData.errorCode=2;
                    userData.message=`User is not found`
                }
               
            }
            else {
                userData.errorCode=1;
                userData.message=`Your's  Email is not Exit system.Plz try other email!`
                
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })

}
let getAllUser = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user="";
            if(userId==="ALL"){
                user =await db.User.findAll({
                    attributes:{exclude:['password']}

                })
            }if(userId && userId!=="ALL"){
                user=await db.User.findOne(
                    {attributes:{exclude:['password']},
                    where: {id:userId}})
            }
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}
let BcryptPassword = (password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            var hashpassword =await bcrypt.hashSync(password, salt);
            resolve(hashpassword)
        } catch (error) {
            reject(error)
        }
    }
  )}
let deleteUser=(id)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let messageresualt={};
            let user =await db.User.findOne({where:{id:id}})
            if(user){
                   let message= await db.User.destroy({
                        where:{id:id}
                    });
                    if(message){
                        messageresualt.errorCode=0,
                        messageresualt.message="Xoa thanh cong"
                    }
                    else{
                        messageresualt.errorCode=1.
                        messageresualt.message="Xoa that bai"
                    }
                resolve(messageresualt)
            }else{
                resolve({
                    errorCode:1,
                    message:"Khong tim thay tai khoan"
                })
            }
            
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
   
}
let edituser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =await db.User.findOne({where:{id:data.id},raw:false})
            console.log(data.phonenumber,'123')
            console.log(user,'123456')
            if(user){
                    user.address=data.address,
                    user.firstName=data.firstName,
                    user.lastName=data.lastName,
                    user.address=data.address,
                    user.phonenumber=data.phonenumber,
               await user.save();
               resolve({
                errorCode:0,
                message:"Update thanh cong",
                user
               })
            }else {
                resolve({
                    errorCode:0,
                    message:"Không tìm thấy người dùng"
                });
            }
        } catch (error) {
            reject(error)
            
        }
    
    })

}
let createuser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hash = await BcryptPassword(data.password);
            await db.User.create({
                email: data.email,
                password:hash,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender:data.gender===1?true:false,
                roleId:data.role,
                phonenumber:data.phonenumber,
                positionId:null,
                image:null,
            })
            resolve({
                errorCode:0,
                message:"Create thành công"
            })

            
        } catch (error) {
            reject(error)
        }
    })

}

module.exports={
    handleUserLogin:handleUserLogin,
    getAllUser:getAllUser,
    deleteUser:deleteUser,
    edituser:edituser,
    checkemail:checkemail,
    createuser:createuser

}