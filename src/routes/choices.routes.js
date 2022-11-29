import { Router } from "express";
import voteVerifyMiddlware from "../middlewares/voteVerify.middlware.js";

const choiceRouter = Router();

choiceRouter.post("/choice",voteVerifyMiddlware)

export default choiceRouter;