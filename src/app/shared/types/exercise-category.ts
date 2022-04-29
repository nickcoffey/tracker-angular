export type ExerciseCategory = {
  id: number;
  name: string;
};

export type AllExerciseCategoryResponse = {
  exerciseCategories: ExerciseCategory[];
};
