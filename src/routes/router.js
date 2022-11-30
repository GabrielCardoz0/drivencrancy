import { Router } from "express";
import choiceRouter from "./choices.routes.js";
import pollRouter from "./poll.routes.js";
import pollIdRouter from "./pollId.routes.js";

const router = Router()

router.use(pollRouter);
router.use(choiceRouter);
router.use(pollIdRouter)

export default router;