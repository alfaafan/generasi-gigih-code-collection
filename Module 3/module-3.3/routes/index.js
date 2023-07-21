import express from "express";
const router = express.Router();
import Movie from "../models/movie.js";

router.post("/post", async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
  });

  try {
    const movieToSave = await movie.save();
    res.status(200).json(movieToSave);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const movieUpdate = req.body;
  const option = { new: false };
  try {
    const movie = await Movie.findByIdAndUpdate(id, movieUpdate, option);
    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    res.status(200).json({ message: `${deleteMovie.title} has been deleted` });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;
