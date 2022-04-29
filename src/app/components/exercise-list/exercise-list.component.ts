import { Component, Input, OnChanges } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { Exercise } from 'src/app/shared/types/exercise';

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnChanges {
  @Input() selectedCategory!: number;
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) {}

  ngOnChanges() {
    this.exerciseService
      .getExercises(this.selectedCategory)
      .subscribe((res) => (this.exercises = res.exercises));
  }
}
