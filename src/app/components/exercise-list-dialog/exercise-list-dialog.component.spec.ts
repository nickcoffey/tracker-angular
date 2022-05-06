import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListDialogComponent } from './exercise-list-dialog.component';

describe('ExerciseListDialogComponent', () => {
  let component: ExerciseListDialogComponent;
  let fixture: ComponentFixture<ExerciseListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
