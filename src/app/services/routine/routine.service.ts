import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROUTINES_BY_PROGRAM_URL, ROUTINE_URL } from 'src/app/shared/constants';
import {
  CreateRoutineInput,
  RoutinesResponse,
  RoutineWithDetails,
} from 'src/app/shared/types/routine';

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

  getRoutineById(id: number) {
    return this.http.get<RoutineWithDetails>(ROUTINE_URL, {
      params: { id },
    });
  }

  createRoutine(newRoutine: CreateRoutineInput) {
    return this.http.post<RoutineWithDetails>(ROUTINE_URL, newRoutine);
  }

  updateRoutine(updatedRoutine: RoutineWithDetails) {
    return this.http.put<RoutineWithDetails>(ROUTINE_URL, updatedRoutine);
  }
}
