const express = require("express");
const router = express.Router();
const {
  getAllWorkoutsController,
  createWorkoutController,
  getWorkoutController,
  deleteWorkoutController,
  updateWorkoutController,
} = require("../controller/workoutController");
// GET all workouts
router.get("/", getAllWorkoutsController);

// GET a single workout
router.get("/:id", getWorkoutController);

// POST a workout
router.post("/", createWorkoutController);

// DELETE a workout
router.delete("/:id", deleteWorkoutController);

// UPDATE a workout
router.patch("/:id", updateWorkoutController);
module.exports = router;
