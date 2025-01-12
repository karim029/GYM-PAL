import { useContext } from "react";
import { workoutContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(workoutContext);

  if (!context)
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );

  return context;
};
