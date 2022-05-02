import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { Exercise } from 'src/app/shared/types/exercise';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'exercise-form-dialog',
  templateUrl: './exercise-form-dialog.component.html',
  styleUrls: ['./exercise-form-dialog.component.css'],
})
export class ExerciseFormDialogComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  categories: ExerciseCategory[] = [];
  editMode = false;
  id = 0;
  name = '';
  categoryId: number = 0;

  constructor(
    private dialogRef: MatDialogRef<ExerciseFormDialogComponent>,
    private exerciseService: ExerciseService,
    @Inject(MAT_DIALOG_DATA)
    data: Exercise
  ) {
    if (data) {
      const { id, name, categoryId } = data;
      this.editMode = Boolean(id);
      this.id = id;
      this.name = name;
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
      this.exerciseService
        .updateExercise({
          id: this.id,
          name: this.name,
          categoryId: this.categoryId,
        })
        .subscribe(() => this.handleSubmitClose());
    } else {
      this.exerciseService
        .createExercise({
          name: this.name,
          categoryId: this.categoryId,
        })
        .subscribe(() => this.handleSubmitClose());
    }
  }

  handleSubmitClose() {
    this.onSubmit.emit();
    this.dialogRef.close();
  }
}
