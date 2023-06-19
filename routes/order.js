import express from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { AddOrder, deleteOrder, getAllOrders, getUserOrder, monthlyIncome, updateOrder } from "../controllers/order.js";

const router = express.Router();

router.post('/', verifyToken, AddOrder  );
router.put('/:id', verifyTokenAndAdmin, updateOrder);

router.delete('/:id', verifyTokenAndAdmin, deleteOrder);
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrder);

router.get('/', verifyTokenAndAdmin, getAllOrders);

router.get('/income',verifyTokenAndAdmin, monthlyIncome )


export default router;