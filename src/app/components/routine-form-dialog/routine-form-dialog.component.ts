import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoutineService } from 'src/app/services/routine/routine.service';
import { Routine, RoutineWithDetails } from 'src/app/shared/types/routine';

@Component({
  selector: 'app-routine-form-dialog',
  templateUrl: './routine-form-dialog.component.html',
  styleUrls: ['./routine-form-dialog.component.css'],
})
export class RoutineFormDialogComponent implements OnInit {
  routine?: Routine;
  routineDetails?: RoutineWithDetails;

  constructor(
    private routineService: RoutineService,
    @Inject(MAT_DIALOG_DATA)
    data?: Routine
  ) {
    this.routine = data;
  }

  ngOnInit(): void {
    if (this.routine) {
      this.routineService.getRoutineById(this.routine.id).subscribe((res) => {
        this.routineDetails = res;
      });
    }
  }
}
