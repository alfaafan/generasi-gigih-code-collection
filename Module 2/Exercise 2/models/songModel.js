import { songs } from "../db/songDb.js";

class Song {
  constructor(id, title, artist, url, playCount) {
    this.songId = id;
    this.title = title;
    this.artist = artist;
    this.url = url;
    this.playCount = playCount;
  }

  generateSongId() {
    return Math.random().toString(10).substring(2, 6);
  }

  getSong(songId) {
    return songs.find((s) => s.songId === songId);
  }

  createSong(title, artist, url) {
    const song = {
      songId: this.generateSongId(),
      title: this.title,
      artist: this.artist,
      url: this.url,
      playCount: 0,
    };
    songs.push(song);
    return songs;
  }
}

export default Song;
