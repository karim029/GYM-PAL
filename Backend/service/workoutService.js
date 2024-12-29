const Workout = require("../model/workoutModel");

export const createWorkout = async (title, rep, load) => {
  const workout = new Workout({ title: title, reps: reps, load: load });
  return await workout.save();
};

export const getAllWorkouts = async () => {
  return await Workout.find();
};

export const getWorkout = async (id) => {
  return await Workout.findById(id);
};

export const deleteWorkout = async (id) => {
  return await Workout.findByIdAndDelete(id);
};

export const updateWorkout = async (id, newData) => {
  return await Workout.findByIdAndUpdate(id, newData, { new: true });
};
