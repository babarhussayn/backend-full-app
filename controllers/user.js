import User from "../model/user.js";
import bcrypt from 'bcrypt'
const user = {
    register: async (req, res) => {
      try {
        const exitUser = await User.findOne({ email: req.body.email });
  
        if (exitUser) {
          return res.status(401).json({
            status: false,
            message: "user already registered",
          });
        }
  
        const newUser = await User.create({ ...req.body });
        if (newUser) {
          return res
            .status(201)
            .json({
              status: true,
              message: `User ${newUser.email} are now registered`,
            });
        }
      } catch (error) {
        console.log(error);
      }
    },

    login: async (req, res) => {

      const { email, password} = req.body;
      try {
        if (!email,!password) {
        return  res.status(401).json({message: "Invalid credential",status: true});
        }
        const user = await User.findOne({email})
        if(!user){
        return  res.status(401).json({message: "User not found",status: true})
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if (!isMatch) {
          return res.status(400).json({
            status: false,
            message: "Invalid credentials",
          });
        }
        return res.status(200).json({
          status: true,
          message: `Welcome, ${user.email}`,
          user,
        });
      } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
          status: false,
          message: "Server error. Please try again later.",
        });
      }
    }

};
export default user;
