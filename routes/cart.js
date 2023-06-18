import express from "express";
import { AddCart, deleteCart, getCart, updateCart } from "../controllers/cart.js";
import { verifyToken, verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

router.post('/', verifyToken , AddCart);

router.put('/:id', verifyTokenAndAuthorization , updateCart );

router.put('/:id', verifyTokenAndAuthorization , deleteCart );
router.put('/find/:userId', verifyTokenAndAuthorization , getCart );

export default router;