import express from "express"
import homeController from "../controller/homeController"
import loginController from "../controller/loginController"
var cors = require('cors')
let router = express.Router();
let initWebRoutes = (app)=>{
    var corsOptions = {
    origin:'http://localhost:3000', 
    header:'Access-Control-Allow-Origin',
    credentials:true,      
    optionSuccessStatus:200,
      }
    app.use(cors(corsOptions))
    router.get('/',homeController.getHomePage);
    router.get('/create_user',homeController.CreateCRUD);
    router.post('/create',homeController.CreateCRUDUser);
    router.get('/alluser',homeController.findAllUser);
    router.get('/edituser',homeController.editUser);
    router.post('/updateuser',homeController.UpdataUser);
    router.get('/deleteuser',homeController.deleteUsers);


    //api
    router.post('/api/login',loginController.authlogin);
    router.get('/api/getalluser',loginController.getUser)
    router.post('/api/updateuser',loginController.updateUser)
    router.post('/api/deleteuser',loginController.deleteUser)
    router.post('/api/createuser',loginController.createUser)
    return app.use("/",router)
}
module.exports=initWebRoutes;

