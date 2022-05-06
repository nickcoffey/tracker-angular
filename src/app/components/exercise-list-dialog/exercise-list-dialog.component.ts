import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { Exercise } from 'src/app/shared/types/exercise';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'app-exercise-list-dialog',
  templateUrl: './exercise-list-dialog.component.html',
  styleUrls: ['./exercise-list-dialog.component.css'],
})
export class ExerciseListDialogComponent implements OnInit {
  categories: ExerciseCategory[] = [{ id: -1, name: 'All' }];
  exercises: Exercise[] = [];
  selectedCategory = -1;
  @Output() onSelect = new EventEmitter<Exercise>();

  constructor(
    private exerciseService: ExerciseService,
    private dialogRef: MatDialogRef<ExerciseListDialogComponent>
  ) {}

  ngOnInit(): void {
    this.exerciseService
      .getAllExerciseCategories()
      .subscribe(
        ({ exerciseCategories }) =>
          (this.categories = [...this.categories, ...exerciseCategories])
      );
    this.fetchExercises();
  }

  handleCategoryChange(categoryId: number) {
    this.selectedCategory = categoryId;
    this.fetchExercises();
  }

  fetchExercises() {
    this.exerciseService
      .getExercises(this.selectedCategory)
      .subscribe(
        ({ exercises }) =>
          (this.exercises = exercises.filter(({ disabled }) => !disabled))
      );
  }

  handleExerciseSelect(exercise: Exercise) {
    this.onSelect.emit(exercise);
    this.dialogRef.close();
  }
}
