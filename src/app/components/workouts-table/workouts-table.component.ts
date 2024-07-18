import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

export interface UserDataType {
  id: number
  username: string
  workouts: {
    type: string
    minutes: number
  }[]
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
  imports: [FormsModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './workouts-table.component.html',
})
export class WorkoutsTableComponent {
  displayedColumns: string[] = ['username', 'workouts', 'number_of_workouts', 'total_workout_minutes']
  dataSource = userData;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  getAllWorkouts(element: UserDataType){
    return element.workouts.map(workout => workout.type).join(', ')
  }

  getTotalWorkoutMinutes(element: UserDataType){
    return element.workouts.reduce((agg, workout) => agg + workout.minutes, 0)
  }

  onChange(){
    console.log(this.toppings.value)
  }
}
