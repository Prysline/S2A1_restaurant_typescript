import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { user: { name: "test" } });
});

export default router;
