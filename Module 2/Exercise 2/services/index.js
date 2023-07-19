import { playlist as playlistDb } from "../db/playlistDb.js";
import Playlist from "../models/playlistModel.js";
import Song from "../models/songModel.js";

export default class PlaylistService {
  addSong(song, playlist) {
    const songToAdd = new Song(song.songId, song.title, song.artist, song.url, song.playCount);
    const playlistToBeAdded = new Playlist(playlist.playlistId, playlist.title, playlist.songs);

    if (!songToAdd || !playlistToBeAdded) {
      throw new Error("Can't find song or playlist");
    }

    if (songToAdd instanceof Song) {
      songToAdd.playCount = 0;
      playlistToBeAdded.songs.push(songToAdd);
      console.log("Song added successfully");
    } else {
      throw new Error("song must be a Song instance");
    }

    return playlist;
  }

  getPlaylist(playlistId) {
    return playlistDb.find((pl) => pl.playlistId === playlistId);
  }

  playSong(playlistId, songId) {
    const playlist = playlistDb.find((pl) => pl.playlistId === playlistId);
    const song = playlist.songs.find((s) => s.songId === songId);

    if (!song || !playlist) {
      throw new Error("Can't find song or playlist");
    }

    song.playCount += 1;

    return song;
  }

  sortSongs(playlistId) {
    const playlist = playlistDb.find((p) => p.playlistId === playlistId);

    if (!playlist) {
      throw new Error("Can't find playlist");
    }

    const sortedSongs = playlist.songs.sort((a, b) => b.playCount - a.playCount);

    return sortedSongs;
  }
}
