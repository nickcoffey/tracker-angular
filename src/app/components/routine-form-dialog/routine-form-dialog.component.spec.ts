import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineFormDialogComponent } from './routine-form-dialog.component';

describe('RoutineFormDialogComponent', () => {
  let component: RoutineFormDialogComponent;
  let fixture: ComponentFixture<RoutineFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
