import { playlist } from "../db/playlistDb.js";
import Song from "./songModel.js";

export default class Playlist {
  constructor(id, title, songs) {
    this.playlistId = id;
    this.title = title;
    this.songs = songs || [];
  }

  generatePlaylistId() {
    return Math.random().toString(10).substring(2, 6);
  }

  getPlaylist(playlistId) {
    return playlist.find((p) => p.playlistId === playlistId);
  }

  getAllPlaylist() {
    return playlist;
  }

  createPlaylist(title) {
    this.playlistId = this.generatePlaylistId();
    if (typeof title == "string") {
      this.title = title;
    } else {
      throw new Error("Title must be string");
    }
  }
}
