import { Component } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  public todos: Array<Todo>;

  constructor() {
    this.todos = [new Todo('Clean room'), new Todo('Learn more Angular'), new Todo('Build cool apps')];
  }

  markCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(todoTask) {
    this.todos = this.todos.filter( t => t.task !== todoTask)
  }
}
