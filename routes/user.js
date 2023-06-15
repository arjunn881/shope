import express from "express";
import  { verifyTokenAndAuthorization } from "./verifyToken.js";
import { update } from "../controllers/user.js";

const router = express.Router();

router.put('/:id', verifyTokenAndAuthorization , update );

export default router;

