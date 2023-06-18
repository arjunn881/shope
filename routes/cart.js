import express from "express";
import { AddCart, deleteCart, updateCart } from "../controllers/cart.js";
import { verifyToken, verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

router.post('/', verifyToken , AddCart);

router.put('/:id', verifyTokenAndAuthorization , updateCart );

router.put('/:id', verifyTokenAndAuthorization , deleteCart );

export default router;