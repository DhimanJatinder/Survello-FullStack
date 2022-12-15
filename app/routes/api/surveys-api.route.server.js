import { Router } from "express";
import {
  GetList,
  Get,
  Add,
  Edit,
  Delete,
  CompleteSurvey,
} from "../../controllers/api/surveys-api.controller.server.js";
const router = Router();

//REST API VERBS
router.get("/list", GetList);
router.get("/:id", Get);
router.post("/add", Add);
router.post("/complete", CompleteSurvey)
router.put("/edit/:id", Edit);
router.delete("/delete/:id", Delete);

export default router;
