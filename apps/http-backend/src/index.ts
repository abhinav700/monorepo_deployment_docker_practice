import express from "express"
import { userRouter } from "./user/user";

const app = express()

app.use(express.json());
app.use("/user", userRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})