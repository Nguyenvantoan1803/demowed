import bcrypt from 'bcryptjs'
import db from '../models/index'
let checkemail = (email)=>{
    return new Promise (async(resolve,reject)=>{
        try {
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

module.exports={
    handleUserLogin:handleUserLogin

}