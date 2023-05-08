import express from "express";
import { createUser,checkUser } from "../controllers/UserController.js";
const router = express.Router()

// llamado a los metodos.
// router.post('/login', createUsers)
router.post('/login', checkUser)
router.post('/register', createUser)

export default router;