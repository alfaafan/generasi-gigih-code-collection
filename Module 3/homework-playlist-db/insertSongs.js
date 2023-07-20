const db = connect("mongodb://localhost:27017/");
const songs = require("./data/songs");

db.songs.insertMany(songs);
