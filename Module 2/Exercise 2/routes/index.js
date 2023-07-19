import express from "express";
import playlistRouter from "./playlistRouter.js";
import PlaylistController from "../controllers/playlistController.js";
const playlistController = new PlaylistController();
const router = express.Router();

router.use("/playlist", playlistRouter);
router.get("/most-played-songs/:playlistId", playlistController.getMostPlayedSongs);

export default router;
