  
import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
  
  let CreateUser = async(data)=>{
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

           let findAll = await db.User.findAll();  
             resolve(findAll);
            
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

  let AllUser =()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = await db.User.findAll({raw:true})
            resolve(users)
        } catch (error) {
            reject(error)
            
        } 
    })
  }
let EditUserById= (iduser)=>{
    return new Promise(async(resolve,reject)=>{
        try {
           let user= await db.User.findOne({where: {id:iduser},raw: true}) 
            if(user){
                resolve(user)
            }else {
                resolve({})
            }
        } catch (error) {
            reject(error)
        }
    })
}
let EditUsernfomation=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user= await db.User.findOne({where: {id:data.id}})
            if(user){
                user.firstName=data.firstName;
                user.lastName= data.lastName;
                user.address= data.address;
                user.phonenumber=data.phonenumber;

            }
            
            else{
                resolve()
            }
        } catch (error) {
            console.log(error)
            
        }
    })

}
let Deleteuser =(id)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({where: {id:id}});
            if(user){
                await user.destroy();
                let findAll = await db.User.findAll();  
                resolve(findAll);
            }
            else{
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}
  module.exports={
    CreateUser:CreateUser,
    AllUser:AllUser,
    EditUserById:EditUserById,
    EditUsernfomation:EditUsernfomation,
    Deleteuser:Deleteuser
  }