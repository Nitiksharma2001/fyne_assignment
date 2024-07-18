import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css',
})
export class AddWorkoutComponent {
  @Output() new_workout: EventEmitter<any> = new EventEmitter();
  
  workouts: string[] = ['Cycling', 'Swimming', 'Yoga'];
  username = '';
  workout = '';
  minutes = null;

  onSave() {
    this.new_workout.emit({username: this.username, workout: this.workout, minutes: this.minutes})
  }
}
