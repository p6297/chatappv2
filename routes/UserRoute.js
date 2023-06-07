const express = require("express");
const user_route = express ();
const path = require("path");
const multer = require('multer');
const bodyparser = require("body-parser");
const userController = require("../controllers/userController");

//middlewares
user_route.use(bodyparser.json());
user_route.use(express.urlencoded({extended: true}))

//set view engine
user_route.set("view engine","ejs");
user_route.set("views","./views");

user_route.use(express.static("public"));

//implementing multer for img upload
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,path.join(__dirname , "../public/images"))

    },
    file: function(req,file,cb) {
        const fileName = Date.now()+"-"+file.originalname;
        cb(null,fileName);

    }
})
const upload = multer({storage:storage})

//defining routes 
user_route.get("/register",userController.get_Register);
user_route.post("/register",upload.single("img"),userController.post_Register);





module.exports = user_route;
