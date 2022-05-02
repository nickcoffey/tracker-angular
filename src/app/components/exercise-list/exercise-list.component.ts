import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from 'src/app/shared/types/exercise';

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent {
  @Input() exercises: Exercise[] = [];
  @Output() openEditDialog = new EventEmitter<Exercise>();

  constructor() {}

  handleEditClick(exercise: Exercise) {
    this.openEditDialog.emit(exercise);
  }
}
