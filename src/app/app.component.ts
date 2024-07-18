import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { UserDataType, WorkoutsTableComponent } from "./components/workouts-table/workouts-table.component";

interface AddWorkoutType {
  username: string
  workout: string
  minutes: number
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddWorkoutComponent, WorkoutsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  workouts: UserDataType[] = []
  
  addWorkout(data: AddWorkoutType){
    const {username, workout, minutes} = data

    const findWorkout = this.workouts.find(item => item.username === username)
    if(findWorkout){
      findWorkout.workouts.push({type: workout, minutes})
    }
    else {
      this.workouts.push({
        id: 2,
        username,
        workouts: [{
          type: workout,
          minutes
        }]
      })
    }

    console.log(this.workouts)
  }
}
