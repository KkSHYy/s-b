import { User } from "../models/User.js";
import bcrypt from "bcrypt";

console.log(bcrypt);

export const getAllUsers = (req,res) => {
  return res.status(200).json({});
  } 
  
  export const loginUser = async (req,res) => {
    // try{
    //   await User.create(req.body);
    //   return res.status(200).json({message: "Logged In successfully"});
    // } catch(err)
    // {
     
    // }
  }

  export const registeredUser = async (req,res) => {
    const {email, password, fullname } = req.body;

    try {
      const isExist =await User.findOne({email: email});
      if (isExist)
      {
        return res.status(409).json({message: " Email already in use"});
      }
      
      const hashPass = bcrypt.hashSync(password, 10);
      await User.create( {
        email: email,
        password: hashPass,
        fullname: fullname
      })
      return res.status(201).json({message: "Registered successfully"});
    } catch (err)
    {
      return res.status(400).json({error: `${err}`});
    }
  }