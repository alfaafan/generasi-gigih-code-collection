import { playlist as playlistDb } from "../db/playlistDb.js";
import { songs as songsDb } from "../db/songDb.js";
import PlaylistService from "../services/index.js";
const playlistService = new PlaylistService();

export default class PlaylistController {
  addSongToPlaylist(req, res) {
    try {
      const { playlistId } = req.params;
      const { songId } = req.body;

      const song = songsDb.find((song) => song.songId === songId);
      const playlist = playlistDb.find((pl) => pl.playlistId === playlistId);

      const updatedPlaylist = playlistService.addSong(song, playlist);

      res.status(200).json({
        message: "success",
        data: updatedPlaylist,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  getSpecificPlaylist(req, res) {
    try {
      const { playlistId } = req.params;
      const data = playlistService.getPlaylist(playlistId);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  getSongInPlaylist(req, res) {
    try {
      const { playlistId, songId } = req.params;

      const song = playlistService.playSong(playlistId, songId);

      res.status(200).json({ message: "Success", data: song });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  getMostPlayedSongs(req, res) {
    try {
      const { playlistId } = req.params;

      const mostPlayedSongs = playlistService.sortSongs(playlistId);

      res.status(200).json({ message: "Success", data: mostPlayedSongs });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
