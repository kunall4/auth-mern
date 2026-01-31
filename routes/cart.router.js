import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { CreateCart, getCart } from "../controllers/cart.controller";

export const router = Router();

// define cart create route here 
router.post("/create-cart",protect,CreateCart)
router.get("/",protect,getCart)