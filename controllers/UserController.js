
import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

      
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(400).send({ message: "User already exists in the database" });
        }

        
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });

        return res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).send({ message: "Internal server error" });
    }
};


export const  updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        const {name,email,password}=req.body;
        const update=await prisma.user.update({
            where:{
                id:Number(id)
            },
            data:{
                name:name
            }
        })
        return res.status(200).send({message:"hogya update"});
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"error"})
        
    }


}
export const getData =async(req,res)=>{
    try {
        const users=await prisma.user.findMany({});
        return res.status(200).json({
            data:users
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:error});
        
    }

}