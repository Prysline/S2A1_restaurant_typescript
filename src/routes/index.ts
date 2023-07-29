import { Router } from "express";
import home from "./modules/home";
const router = Router();

router.use("/", home);

export default router;