import { Router } from "express";
import pollResultController from "../controllers/pollResult.controller.js";

const resultRouter = Router();

resultRouter.get("/poll/:id/result",pollResultController);

export default resultRouter;