import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ExerciseFormDialogComponent } from 'src/app/components/exercise-form-dialog/exercise-form-dialog.component';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { Exercise } from 'src/app/shared/types/exercise';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  categories: ExerciseCategory[] = [{ id: -1, name: 'All' }];
  selectedCategory = -1;
  exercises: Exercise[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.exerciseService
      .getAllExerciseCategories()
      .subscribe(
        (res) =>
          (this.categories = [...this.categories, ...res.exerciseCategories])
      );
    this.fetchExercises();
  }

  handleCategoryChange(categoryId: number) {
    this.selectedCategory = categoryId;
    this.fetchExercises();
  }

  openConfirmDialog(exercise: Exercise) {
    const { id, name } = exercise;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete ${name}?`,
        message: `Are you sure you want to delete ${name}?`,
      },
    });
    dialogRef.componentInstance.onConfirm.subscribe(() => {
      this.exerciseService
        .deleteExercise(id)
        .subscribe(() => this.fetchExercises());
    });
  }

  openFormDialog(exercise?: Exercise) {
    const dialogRef = this.dialog.open(ExerciseFormDialogComponent, {
      data: exercise,
    });
    dialogRef.componentInstance.onSubmit.subscribe(() => {
      this.fetchExercises();
    });
  }

  fetchExercises() {
    this.exerciseService
      .getExercises(this.selectedCategory)
      .subscribe((res) => (this.exercises = res.exercises));
  }
}
