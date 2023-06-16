import express from "express";
import  { verifyTokenAndAuthorization } from "./verifyToken.js";
import { deleteUser, update } from "../controllers/user.js";

const router = express.Router();

router.put('/:id', verifyTokenAndAuthorization , update );

router.delete('/:id', verifyTokenAndAuthorization , deleteUser );

export default router;

