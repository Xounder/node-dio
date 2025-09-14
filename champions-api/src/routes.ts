import { Router } from "express";
import * as playerController from "./controllers/players-controller";
import * as clubsController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", playerController.getPlayer)
router.post("/players", playerController.createPlayer)
router.get("/players/:id", playerController.getPlayerById)
router.put("/players/:id", playerController.updatePlayerById)
router.delete("/players/:id", playerController.deletePlayerById)

router.get("/clubs", clubsController.getClubs)

export default router;