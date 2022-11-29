import { Router } from "express";
import createPollController from "../controllers/createPoll.controller.js";
import findPollsController from "../controllers/findPolls.controller.js";
import pollVerifyMiddleware from "../middlewares/pollVerify.middleware.js";

const pollRouter = Router();

pollRouter.post("/poll" , pollVerifyMiddleware, createPollController);
pollRouter.get("/poll", findPollsController);

export default pollRouter;