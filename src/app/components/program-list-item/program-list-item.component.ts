import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutineService } from 'src/app/services/routine/routine.service';
import { Program } from 'src/app/shared/types/program';
import { Routine } from 'src/app/shared/types/routine';
import { RoutineFormDialogComponent } from '../routine-form-dialog/routine-form-dialog.component';

@Component({
  selector: 'program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.css'],
})
export class ProgramListItemComponent implements OnInit {
  @Input() program!: Program;
  routines: Routine[] = [];

  constructor(
    private routineService: RoutineService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.routineService
      .getRoutinesByProgram(this.program.id)
      .subscribe(({ routines }) => (this.routines = routines));
  }

  openRoutineFormDialog(routine: Routine) {
    this.dialog.open(RoutineFormDialogComponent, {
      data: routine,
    });
  }
}
