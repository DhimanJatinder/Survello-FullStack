import { Router } from "express";
import { CompleteSurvey } from "../../controllers/api/completeSurveys-api.controller.server.js";
const router = Router();

//REST API VERBS
router.post("/complete", CompleteSurvey)


export default router;
