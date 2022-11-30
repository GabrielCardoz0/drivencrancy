import { Router } from "express";
import choiceRouter from "./choices.routes.js";
import choiceIdRouter from "./choicesId.routes.js";
import pollRouter from "./poll.routes.js";
import pollIdRouter from "./pollId.routes.js";
import resultRouter from "./result.routes.js";

const router = Router()

router.use(pollRouter);
router.use(choiceRouter);
router.use(pollIdRouter);
router.use(choiceIdRouter);
router.use(resultRouter);

export default router;