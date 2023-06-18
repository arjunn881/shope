import express from "express";
import { AddCart, updateCart } from "../controllers/cart.js";
import { verifyToken, verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

router.post('/', verifyToken , AddCart);

router.put('/:id', verifyTokenAndAuthorization , updateCart );

export default router;