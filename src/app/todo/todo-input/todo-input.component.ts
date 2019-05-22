import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
  public todo: string;
  @Output() private addTodo: EventEmitter<Todo>;

  constructor() {
    this.todo = '';
    this.addTodo = new EventEmitter<Todo>();
  }

  onTodoSubmit(event) {
    this.addTodo.emit(new Todo(this.todo))
    this.todo = '';
  }
}
