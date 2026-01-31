import {Router} from "express"
import { GetProducts, createprod } from "../controllers/Products.controller.js";
import { upload } from "../middlewares/multer.js";

export const router = Router();

router.get("/",GetProducts)
router.post("/crp",upload.single("image"),createprod)
