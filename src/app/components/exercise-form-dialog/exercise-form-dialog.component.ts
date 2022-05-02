import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'exercise-form-dialog',
  templateUrl: './exercise-form-dialog.component.html',
  styleUrls: ['./exercise-form-dialog.component.css'],
})
export class ExerciseFormDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter();

  categories: ExerciseCategory[] = [];
  editMode = false;
  name = '';
  categoryId: number = 0;

  constructor(
    private dialogRef: MatDialogRef<ExerciseFormDialogComponent>,
    private exerciseService: ExerciseService,
    @Inject(MAT_DIALOG_DATA) data: { name: string; categoryId: number }
  ) {
    if (data) {
      const { name, categoryId } = data;
      this.editMode = Boolean(name);
      this.name = '';
      this.categoryId = categoryId;
    }
  }

  ngOnInit(): void {
    this.exerciseService
      .getAllExerciseCategories()
      .subscribe(
        (res) =>
          (this.categories = [...this.categories, ...res.exerciseCategories])
      );
  }

  submitForm() {
    if (this.editMode) {
      // EDIT HERE
    } else {
      this.exerciseService
        .createExercise({
          name: this.name,
          categoryId: this.categoryId,
        })
        .subscribe(() => this.dialogRef.close());
    }
  }
}
