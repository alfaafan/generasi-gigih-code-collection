import express from "express";
const router = express.Router();
import PlaylistController from "../controllers/playlistController.js";
const playlistController = new PlaylistController();

router.get("/:playlistId", playlistController.getSpecificPlaylist);
router.get("/:playlistId/:songId", playlistController.getSongInPlaylist);
router.post("/:playlistId", playlistController.addSongToPlaylist);

export default router;
