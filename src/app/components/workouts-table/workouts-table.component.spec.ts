import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsTableComponent } from './workouts-table.component';

describe('WorkoutsTableComponent', () => {
  let component: WorkoutsTableComponent;
  let fixture: ComponentFixture<WorkoutsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
