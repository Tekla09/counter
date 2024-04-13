import { Component, Input } from '@angular/core';

export interface Todo {
  name: string;
  email: string;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  private readonly newProperty = 'app-to-do-list';

  @Input() users: Todo[] = [];
  constructor() {}
}
