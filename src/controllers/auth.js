import { hash, compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../models/mongoDB/User.js";
const saltRounds = 10

export const authController = {
    // Quitar ésta opcion (debe ser por ID excepto que sea para administracion)
    async getAll(req, res){
        try {
            const data = await User.find();
            res.json(data);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error fetching users" });
        }
    },
    // get a resource by Id 
    async getById(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(400).json({ success: false, message: "Missing 'id' param" })
            }
    
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ success: false, message: `No user found with id '${id}'` })
            }
    
            res.status(200).json({success: true, message: "User found", data: user})
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },
    async registerUser(req, res) {
        try {
            const { fullName, email } = req.body
            const password = await hash(req.body.password, saltRounds)
            const newUser = new User({ fullName, email, password })
            const response = await newUser.save()
            res.status(200).json({ success: true, message: "New user registered", data: response })
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            res.status(200).json({ success: true, message: "User deleted successfully", data: deletedUser });
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },
    async login(req, res){
        
        if (!req.body.email) {
            return res.status(400).json({ success: false, message: "User email is required" });
        }
        if (!req.body.password) {
            return res.status(400).json({ success: false, message: "User password is required" });
        }
        const response = await User.find().where({email: req.body.email})
        // console.log(response)
        if(!response.length){
           return res.status(401).json({ success: false, message: "Invalid Email or Password" });
        }
        
        const isSamePassword = await compare(req.body.password, response[0].password)
        if(!isSamePassword){
           return res.status(401).json({ success: false, message: "Invalid Email or Password" });
        }
        const userForToken = {
            userName: response[0].fullName,
            userEmail: response[0].email,
            sub: response[0].id
        }
        const accessToken = jwt.sign(userForToken, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.status(200).json({ success: true, message: "User Authenticated", data: accessToken })
    }
}