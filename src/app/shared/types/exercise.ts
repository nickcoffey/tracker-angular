export type Exercise = {
  id: number;
  name: string;
  disabled: boolean;
  categoryId: number;
};

export type ExercisesResponse = {
  exercises: Exercise[];
};

export type CreateExerciseInput = {
  name: string;
  disabled: boolean;
  categoryId: number;
};
