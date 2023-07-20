const db = connect("mongodb://localhost:27017/");
const popularSongs = require("./data/popularSongs");

db.popular_songs.insertMany(popularSongs);
