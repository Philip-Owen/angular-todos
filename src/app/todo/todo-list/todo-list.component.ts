import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() public todos: Array<Todo>;
  @Output() private deleteTodo: EventEmitter<string>;

  constructor() {
    this.deleteTodo = new EventEmitter<string>();
  }

  markCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos);
  }

  onTodoDelete(event, task) {
    this.deleteTodo.emit(task);
  }
}
