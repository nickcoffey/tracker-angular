import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseFormDialogComponent } from 'src/app/components/exercise-form-dialog/exercise-form-dialog.component';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  categories: ExerciseCategory[] = [{ id: -1, name: 'All' }];
  selectedCategory = -1;

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
  }

  openDialog() {
    this.dialog.open(ExerciseFormDialogComponent);
  }
}
