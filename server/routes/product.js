import express from "express";

import { addProduct , view , viewById ,  viewByEmail , deleteProduct } from './../controllers/product.js';

const router = express.Router();

router.post("/addProduct", addProduct);
router.use("/viewProduct", view);
router.use("/viewById/:id", viewById);
router.use("/viewByEmail/:email", viewByEmail);
router.use('/deleteProduct/:id', deleteProduct);


export default router;
