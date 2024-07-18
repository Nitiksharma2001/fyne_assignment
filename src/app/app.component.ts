import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutsTableComponent } from "./components/workouts-table/workouts-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddWorkoutComponent, WorkoutsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fyle';
}
