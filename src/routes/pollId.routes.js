import { Router } from "express";
import pollIdController from "../controllers/pollId.controller.js";

const pollIdRouter = Router();

pollIdRouter.get("/poll/:id/choice", pollIdController);

export default pollIdRouter;