import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

export interface UserDataType {
  id: number;
  username: string;
  workouts: workoutType[];
}
interface workoutType {
  type: string;
  minutes: number;
}
const userData: UserDataType[] = [
  {
    id: 1,
    username: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 },
    ],
  },
  {
    id: 2,
    username: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 },
    ],
  },
];

@Component({
  selector: 'app-workouts-table',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './workouts-table.component.html',
})
export class WorkoutsTableComponent {
  @Input() workouts: UserDataType[] = [];

  workout = new FormControl<string[]>([]);
  staticWorkouts: string[] = ['Cycling', 'Swimming', 'Yoga'];
  dataSource: UserDataType[];

  constructor() {
    this.dataSource = this.modifyUserData();
  }
  displayedColumns: string[] = [
    'username',
    'workouts',
    'number_of_workouts',
    'total_workout_minutes',
  ];

  username = '';
  workoutTypes: string[] = [];
  pageSize = 5;
  currentPage = 0;

  getAllWorkouts(element: UserDataType) {
    return element.workouts.map((workout) => workout.type).join(', ');
  }

  getTotalWorkoutMinutes(element: UserDataType) {
    return element.workouts.reduce((agg, workout) => agg + workout.minutes, 0);
  }

  onChange() {
    this.workoutTypes = this.workout.value ? this.workout.value : [];
  }

  modifyUserData() {
    return this.workouts
      .filter((data) => data.username.includes(this.username))
      .filter(
        (data) =>
          this.workoutTypes.length == 0 ||
          data.workouts.find((item) => this.workoutTypes.includes(item.type))
      );
  }
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.currentPage = e.pageIndex;
  }
}
