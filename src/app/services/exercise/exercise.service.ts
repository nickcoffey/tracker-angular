import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ALL_EXERCISES_URL,
  ALL_EXERCISE_CATEGORY_URL,
  EXERCISES_BY_CATEGORY_URL,
  EXERCISE_URL,
} from '../../shared/constants';
import { AllExerciseCategoryResponse } from '../../shared/types/exercise-category';
import {
  Exercise,
  CreateExerciseInput,
  ExercisesResponse,
} from '../../shared/types/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}

  getAllExerciseCategories() {
    return this.http.get<AllExerciseCategoryResponse>(
      ALL_EXERCISE_CATEGORY_URL
    );
  }

  getExercises(categoryId: number) {
    if (categoryId === -1) {
      return this.http.get<ExercisesResponse>(ALL_EXERCISES_URL);
    }
    return this.http.get<ExercisesResponse>(EXERCISES_BY_CATEGORY_URL, {
      params: { categoryId },
    });
  }

  createExercise(exerciseInput: CreateExerciseInput) {
    return this.http.post<Exercise>(EXERCISE_URL, exerciseInput);
  }

  updateExercise(exerciseInput: Exercise) {
    return this.http.put<Exercise>(EXERCISE_URL, exerciseInput);
  }
}
