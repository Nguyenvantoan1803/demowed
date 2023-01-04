import express from "express"
import homeController from "../controller/homeController"
let router = express.Router();
let initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/create_user',homeController.CreateCRUD);
    router.post('/create',homeController.CreateCRUDUser);
    router.get('/alluser',homeController.findAllUser);
    router.get('/edituser',homeController.editUser);
    router.post('/updateuser',homeController.UpdataUser);
    router.get('/deleteuser',homeController.deleteUsers);
    return app.use("/",router)
}
module.exports=initWebRoutes;

