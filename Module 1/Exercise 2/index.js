class Song {
  constructor(title, artists, duration) {
    (this.title = title), (this.artists = artists), (this.duration = duration);
  }
}

const songListPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const song = new Song("Song Title", [{ name: "Artist Name 1" }], 200);
    resolve(song);
    // reject(new Error("Failed to fetch songs"));
  }, 300);
});

// using promise
const getSongList = (songListPromise) => {
  songListPromise.then((songs) => console.log(songs)).catch((error) => console.error(error));
};

getSongList(songListPromise);

// using async await
const getSongAsync = async (songListPromise) => {
  try {
    const songs = await songListPromise;
    console.log(songs);
  } catch (err) {
    console.error(err);
  }
};

getSongAsync(songListPromise);
