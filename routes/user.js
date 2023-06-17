import express from "express";
import  { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { deleteUser, getAllUser, getUser, getUserStats, update } from "../controllers/user.js";

const router = express.Router();

router.put('/:id', verifyTokenAndAuthorization , update );

router.delete('/:id', verifyTokenAndAuthorization , deleteUser );

router.get('/find/:id', verifyTokenAndAdmin , getUser );

router.get('/', verifyTokenAndAdmin , getAllUser );

router.get('/stats', verifyTokenAndAdmin , getUserStats );


export default router;

