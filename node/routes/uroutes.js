import express from "express";
import { createUsers, getAllUsers  } from "../controllers/ApiUserController.js";
import { checkUser  } from "../controllers/UserController.js";
const router = express.Router()

// llamado a los metodos.
// router.post('/login', createUsers)
router.post('/login', checkUser)
router.post('/register', createUsers)

export default router;