import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: Number,
  },
});

export default mongoose.model("Movie", movieSchema);
