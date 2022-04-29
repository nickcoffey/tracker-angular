import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROUTINES_BY_PROGRAM_URL } from 'src/app/shared/constants';
import { RoutinesResponse } from 'src/app/shared/types/routine';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  constructor(private http: HttpClient) {}

  getRoutinesByProgram(programId: number) {
    return this.http.get<RoutinesResponse>(ROUTINES_BY_PROGRAM_URL, {
      params: { programId },
    });
  }
}
