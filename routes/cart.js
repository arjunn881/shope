import express from "express";
import { AddCart, deleteCart, getAll, getUserCart, updateCart } from "../controllers/cart.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

router.post('/', verifyToken , AddCart);

router.put('/:id', verifyTokenAndAuthorization , updateCart );

router.delete('/:id', verifyTokenAndAuthorization , deleteCart );
router.get('/find/:userId', verifyTokenAndAuthorization , getUserCart );
router.get('/', verifyTokenAndAdmin, getAll );

export default router;