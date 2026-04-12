const createToken = require("../config/create-token");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      const err = new Error("user already exists");
      err.status = 409;
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    createToken(user._id, res);
    res.status(201).json({
      message: "User created successfully",
      registeredUser: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    const err = error;
    err.status = 400;
    next(err);
  }
};

const login = async (req, res, next) => {
    try {
        const {identifier, password} = req.body
        const user = await userModel.findOne({$or:[{email:identifier}, {username:identifier}]})
        if(!user){
            const err = new Error("user doesn't exist, please register")
            err.status = 404
            return next(err)
        }

        const comparedPassword = await bcrypt.compare(password, user.password)
        
        if(!comparedPassword){
            const err = new Error('invalid email or password')
            err.status = 401
            return next(err)
        }

        createToken(user._id, res)
        res.status(200).json({message:"User loggedIn successfully", loggedInUser:{
            id:user._id,
            username:user.username,
            email:user.email,
            createdAt: user.createdAt,
        }})

    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
};

const check = async (req, res, next) => {

    try {
        const id = req.user.userId
        if(!id){
            const err = new Error('invalid token id')
            err.status = 401
            return next(err)
        }
        const user = await userModel.findById(id)
        res.status(200).json({authenticatedUser:{
            id,
            username:user.username,
            email:user.email,
            createdAt:user.createdAt,
        }})
    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
};

const logout = async (req, res, next) => {};

module.exports = { register, login, check, logout };
