import { Router } from "express";
import choiceIdControler from "../controllers/choiceId.controler.js";

const choiceIdRouter = Router();

choiceIdRouter.post("/choice/:id/vote", choiceIdControler);

export default choiceIdRouter;