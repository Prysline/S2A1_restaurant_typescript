import express, { Router } from "express";
import home from "./modules/home";
const router = express.Router();

router.use("/", home);

export default router;