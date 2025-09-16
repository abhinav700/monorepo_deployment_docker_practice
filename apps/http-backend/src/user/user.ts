import { Router } from "express";
import { prisma } from "@repo/db/client";

export const userRouter : Router = Router();

userRouter.post("/addUser", async (req, res) => {
  try {
    const {email, name} = req.body;
    if(!email || !name) {
      return res.status(400).send({error: "Email and name are required"});
    }

    const user = await prisma.user.create({
      data: {
        email,
        name
      }
    });

    res.status(201).send(user);
  } catch (error) {
    
  }

})


userRouter.get("/getUsers", async(req, res) => {
  try{
    const users = await prisma.user.findMany();
    console.log(users);
    res.status(200).send(users);
  }catch(error){
    res.status(500).send({error: "Internal Server Error"});
  }
})
