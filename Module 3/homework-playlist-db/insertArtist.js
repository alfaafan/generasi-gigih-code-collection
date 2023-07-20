const db = connect("mongodb://localhost:27017/");
const artists = require("./data/artists");

db.artists.insertMany(artists);
