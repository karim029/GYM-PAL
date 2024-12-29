const Workout = require("../model/workoutModel");

const createWorkout = async (title, reps, load) => {
  const workout = new Workout({ title: title, reps: reps, load: load });
  return await workout.save();
};

const getAllWorkouts = async () => {
  return await Workout.find();
};

const getWorkout = async (id) => {
  return await Workout.findById(id);
};

const deleteWorkout = async (id) => {
  return await Workout.findByIdAndDelete(id);
};

const updateWorkout = async (id, newData) => {
  return await Workout.findByIdAndUpdate(id, newData, { new: true });
};

module.exports = {
  updateWorkout,
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
};
