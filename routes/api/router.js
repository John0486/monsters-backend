import express from "express";
import {
  gameResult,
  getMonster,
  gameStart,
} from "../../controller/totalController.js";
const router = express.Router();

router.get("/test", getMonster);

router.post("/gameStart", gameStart);
router.post("/result", gameResult);

export default router;
