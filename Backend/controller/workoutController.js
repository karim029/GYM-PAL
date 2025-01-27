const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../service/workoutService");

const createWorkoutController = async (req, res) => {
  try {
    const { title, reps, load } = req.body;

    let emptyfields = [];

    if (!title) {
      emptyfields.push("title");
    }
    if (!load) {
      emptyfields.push("load");
    }
    if (!reps) {
      emptyfields.push("reps");
    }

    if (emptyfields.length > 0) {
      return res.status(400).json({
        error: "Please fill in all the fields",
        emptyfields,
      });
      const user_id = req.user._id;
    }
    const workout = await createWorkout(title, reps, load, user_id);
    return res
      .status(200)
      .json({ message: "Workout Created successfully", data: workout });
  } catch (error) {
    res.status(500).json({ error: error.message, emptyfields });
  }
};
const getAllWorkoutsController = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await getAllWorkouts(user_id);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkoutController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Workout not found" });
    }
    const workout = await getWorkout(id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkoutController = async (req, res) => {
  try {
    const updatedWorkout = await updateWorkout(req.params.id, req.body);
    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkoutController = async (req, res) => {
  try {
    const deletedWorkout = await deleteWorkout(req.params.id);
    if (!deletedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkoutController,
  getAllWorkoutsController,
  getWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
};
