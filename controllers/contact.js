import Contact from '../model/contact.js';


const contact= {
    createMessage:async (req,res) =>{

        try{
        const {name,email,phone,address,message}= req.body;

        const sendMessage= await Contact.create({name,email,phone,address,message});
            return res.status(201).json({sucess:true,message:"sucess fully send",status:true,data:sendMessage});
        }catch(err){

            res.status(500).json({sucess:false,message:"failed to create message"})
        }
    }
}
export default contact;