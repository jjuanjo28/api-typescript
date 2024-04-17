"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const decodeToken_1 = require("../../auth/decodeToken");
//import { uploadA } from "../App";
const router = (0, express_1.Router)();
router.post("/auth/login", user_controller_1.getLogin);
router.route("/").get(decodeToken_1.decodeToken, user_controller_1.getAllUsers);
router.get("/:id", decodeToken_1.decodeToken, user_controller_1.getUser);
//router.post("/",uploadA.single("photo"), createUser)
router.put("/user/:id", decodeToken_1.decodeToken, user_controller_1.editUser);
router.delete("/user/:id", decodeToken_1.decodeToken, user_controller_1.deleteUser);
exports.default = router;
