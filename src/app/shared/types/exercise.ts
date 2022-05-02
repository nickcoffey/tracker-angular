export type Exercise = {
  id: number;
  name: string;
  categoryId: number;
};

export type ExercisesResponse = {
  exercises: Exercise[];
};

export type CreateExerciseInput = {
  name: string;
  categoryId: number;
};
