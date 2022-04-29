import { Component, Input, OnInit } from '@angular/core';
import { RoutineService } from 'src/app/services/routine/routine.service';
import { Program } from 'src/app/shared/types/program';
import { Routine } from 'src/app/shared/types/routine';

@Component({
  selector: 'program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.css'],
})
export class ProgramListItemComponent implements OnInit {
  @Input() program!: Program;
  routines: Routine[] = [];

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
    this.routineService
      .getRoutinesByProgram(this.program.id)
      .subscribe(({ routines }) => (this.routines = routines));
  }
}
