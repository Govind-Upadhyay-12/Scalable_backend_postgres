import { createUser,updateUser,getData } from "../controllers/UserController.js";
import { Router } from "express";

const router=Router();

router.post("/create_user",createUser);
router.post("/update/:id",updateUser);
router.get("/all_data",getData)

export default router

