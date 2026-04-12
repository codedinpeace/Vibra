const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')

const register = async (req,res, next)=>{
	try {
        const {username, email, password} = req.body        
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            const err = new Error('user already exists')
            err.status = 409
            return next(err)
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = await userModel.create({
            username,
            email,
            password:hashedPassword,
        })

    } catch (error) {
        
    }
}
const login = async (req,res, next)=>{

}
const check = async (req,res, next)=>{

}
const logout = async (req,res, next)=>{

}

module.exports = {register, login, check, logout}