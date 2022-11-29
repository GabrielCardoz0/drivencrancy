import { Router } from "express";
import newVoteController from "../controllers/newVote.controller.js";
import voteVerifyMiddlware from "../middlewares/voteVerify.middlware.js";

const choiceRouter = Router();

choiceRouter.post("/choice",voteVerifyMiddlware,newVoteController)

export default choiceRouter;