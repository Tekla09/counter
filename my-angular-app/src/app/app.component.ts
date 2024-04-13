import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export interface Todo {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: Todo[] = [
    { name: 'Emily Brown', email: 'emily.brown@example.com' },
    { name: 'William Taylor', email: 'william.taylor@example.com' },
    { name: 'Olivia Wilson', email: 'olivia.wilson@example.com' },
  ];

  initialValue: number = 0;
  title = 'angular';

  onValueChange(event: number) {
    console.log('New value:', event);
  }
}
