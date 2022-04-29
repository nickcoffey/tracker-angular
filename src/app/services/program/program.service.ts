import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ALL_PROGRAM_URL } from 'src/app/shared/constants';
import { AllProgramResponse } from 'src/app/shared/types/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private http: HttpClient) {}

  getAllPrograms() {
    return this.http.get<AllProgramResponse>(ALL_PROGRAM_URL);
  }
}
