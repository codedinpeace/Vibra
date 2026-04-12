const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controllers");
const Validators = require("../validation/express.validation");
const verifyUser = require("../middlewares/verifyUser.middleware");

authRouter.post(
    "/register",
    Validators.registerValidator,
    authController.register,
);

authRouter.post(
    "/login",
    Validators.loginValidator, 
    authController.login
);

authRouter.get(
    "/check", 
    verifyUser, 
    authController.check
);
    
authRouter.post(
    "/logout", 
    authController.logout
);

module.exports = authRouter;
