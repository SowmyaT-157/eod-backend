import { Router } from "express";
import getTheEod from "../controllers/EodController";

export const router = Router();
router.get("/getAllEod", getTheEod);
