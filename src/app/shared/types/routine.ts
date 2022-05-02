export type Routine = {
  id: number;
  name: string;
};

type RoutineExerciseSetDetails = {
  id: number
  weight: number
  reps: number
}

type RoutineExerciseDetails = {
  id: number
  exerciseId: number
  name: string
  sets: RoutineExerciseSetDetails[]
}

export type RoutineWithDetails = Routine & { 
  exercises: RoutineExerciseDetails[]
}

export type RoutinesResponse = {
  routines: Routine[];
};
