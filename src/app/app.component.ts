import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import {
  UserDataType,
  WorkoutsTableComponent,
} from './components/workouts-table/workouts-table.component';
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
interface AddWorkoutType {
  username: string;
  workout: string;
  minutes: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddWorkoutComponent, WorkoutsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  workouts: UserDataType[] = userData;

  constructor() {
    const workouts = localStorage.getItem('workouts');
    if (workouts) {
      this.workouts = JSON.parse(workouts) as UserDataType[];
    }
  }

  addWorkout(data: AddWorkoutType) {
    const { username, workout, minutes } = data;

    const findWorkout = this.workouts.find(
      (item) => item.username === username
    );
    if (findWorkout) {
      findWorkout.workouts.push({ type: workout, minutes });
    } else {
      this.workouts.push({
        id: 2,
        username,
        workouts: [
          {
            type: workout,
            minutes,
          },
        ],
      });
    }
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
}
