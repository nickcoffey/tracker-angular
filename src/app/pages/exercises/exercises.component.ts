import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';
import { ExerciseCategory } from 'src/app/shared/types/exercise-category';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  categories: ExerciseCategory[] = [{ id: -1, name: 'All' }];
  selectedCategory = -1;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService
      .getAllExerciseCategories()
      .subscribe(
        (res) =>
          (this.categories = [...this.categories, ...res.exerciseCategories])
      );
  }
}
