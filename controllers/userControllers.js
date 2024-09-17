import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
       
export const getAllUsers = (req,res) => {
  return res.status(200).json({});
  } 
  
  export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const isExist = await User.findOne({ email });
      if (!isExist) return res.status(404).json({ message: 'user doesn\'t exist' });
  
      const pass = bcrypt.compareSync(password, isExist.password);
      if (!pass) return res.status(401).json({ message: 'invalid credential' });
  
      const token = jwt.sign({
        id: isExist._id,
        isAdmin: isExist.isAdmin
      }, 'secret');
  
      return res.status(200).json({
        token,
        email: isExist.email,
        fullname: isExist.fullname,
        isAdmin: isExist.isAdmin,
        token,
        id:isExist._id
      });
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
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

  export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (mongoose.isValidObjectId(id)) {
        const isExist = await User.findById(id);
        if (!isExist) return res.status(404).json({ message: 'user doesn\'t exist' });
        await isExist.updateOne({
          fullname: req.body.fullname || isExist.fullname,
          email: req.body.email || isExist.email
        });
        return res.status(200).json({ message: 'user updated successfuly' });
      } else {
        return res.status(400).json({ message: 'please provide valid id' });
      }
  
  
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }