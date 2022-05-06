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
    this.fetchRoutines()
  }

  fetchRoutines() {
    this.routineService
      .getRoutinesByProgram(this.program.id)
      .subscribe(({ routines }) => (this.routines = routines));
  }

  openRoutineEditDialog(routine: Routine) {
    const dialogRef = this.dialog.open(RoutineFormDialogComponent, {
      data: { routine, programId: this.program.id },
    });
    dialogRef.componentInstance.emitSubmit.subscribe(() => {
      this.fetchRoutines()
      dialogRef.close()
    })
  }

  openRoutineCreateDialog() {
    const dialogRef = this.dialog.open(RoutineFormDialogComponent, {
      data: { programId: this.program.id },
    });
    dialogRef.componentInstance.emitSubmit.subscribe(() => {
      this.fetchRoutines()
      dialogRef.close()
    })
  }
}
