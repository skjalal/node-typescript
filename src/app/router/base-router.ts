import { Router } from "express";
import { baseController } from "../controller/base-controller";

const router = Router();

router.get("/", baseController);

export default router;
