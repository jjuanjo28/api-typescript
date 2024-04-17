import { Router } from "express";
import { getLogin ,getAllUsers, getUser, createUser, editUser, deleteUser } from "../controller/user.controller";
import { decodeToken } from "../../auth/decodeToken"
//import { uploadA } from "../App";

const router = Router()






router.post("/auth/login", getLogin)  

router.route("/").get(decodeToken,getAllUsers)
router.get("/:id",decodeToken,getUser)
//router.post("/",uploadA.single("photo"), createUser)
router.put("/user/:id",decodeToken, editUser)
router.delete("/user/:id", decodeToken,deleteUser)

export default router
