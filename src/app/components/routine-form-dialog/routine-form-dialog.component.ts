import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoutineService } from 'src/app/services/routine/routine.service';
import {
  CreateRoutineInput,
  Routine,
  RoutineWithDetails,
} from 'src/app/shared/types/routine';
import { ExerciseListDialogComponent } from '../exercise-list-dialog/exercise-list-dialog.component';

@Component({
  selector: 'app-routine-form-dialog',
  templateUrl: './routine-form-dialog.component.html',
  styleUrls: ['./routine-form-dialog.component.css'],
})
export class RoutineFormDialogComponent implements OnInit {
  programId!: number;
  routine?: Routine;
  routineDetails: RoutineWithDetails = {
    id: -1,
    name: '',
    exercises: [],
  };
  @Output() emitSubmit = new EventEmitter();

  constructor(
    private routineService: RoutineService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    data?: { routine: Routine; programId: number }
  ) {
    if (data) {
      this.routine = data.routine;
      this.programId = data.programId;
    }
  }

  ngOnInit(): void {
    if (this.routine) {
      this.routineService.getRoutineById(this.routine.id).subscribe((res) => {
        this.routineDetails = res;
      });
    }
  }

  addExercise() {
    const dialogRef = this.dialog.open(ExerciseListDialogComponent);
    dialogRef.componentInstance.onSelect.subscribe((selectedExercise) => {
      this.routineDetails?.exercises.push({
        id: -1,
        name: selectedExercise.name,
        exerciseId: selectedExercise.id,
        sets: [],
      });
    });
  }

  removeExercise(exerciseIndex: number) {
    this.routineDetails?.exercises.splice(exerciseIndex, 1);
  }

  addSet(exerciseIndex: number) {
    this.routineDetails?.exercises[exerciseIndex].sets.push({
      id: -1,
      weight: 0,
      reps: 0,
    });
  }

  removeSet(exerciseIndex: number, setIndex: number) {
    this.routineDetails?.exercises[exerciseIndex].sets.splice(setIndex, 1);
  }

  onSubmit() {
    if (this.routine) {
      this.routineService.updateRoutine(this.routineDetails).subscribe(() => {
        this.emitSubmit.emit();
      });
    } else {
      const { name, exercises } = this.routineDetails;
      const newRoutine: CreateRoutineInput = {
        name,
        programId: this.programId,
        exercises: exercises.map(({ exerciseId, sets }) => ({
          exerciseId,
          sets: sets.map(({ weight, reps }) => ({ weight, reps })),
        })),
      };
      this.routineService.createRoutine(newRoutine).subscribe(() => {
        this.emitSubmit.emit();
      });
    }
  }
}
