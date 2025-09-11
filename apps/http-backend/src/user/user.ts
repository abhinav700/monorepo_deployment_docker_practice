import { Router } from "express";
import { prisma } from "@repo/db/client";
const router = Router();

router.post("/addUser", async (req, res) => {
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