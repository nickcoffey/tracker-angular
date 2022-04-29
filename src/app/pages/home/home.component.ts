import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program/program.service';
import { Program } from 'src/app/shared/types/program';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService
      .getAllPrograms()
      .subscribe(({ programs }) => (this.programs = programs));
  }
}
