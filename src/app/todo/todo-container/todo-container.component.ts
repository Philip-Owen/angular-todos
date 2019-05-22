import { Component, OnInit } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent {
  public todos: Array<Todo>;

  constructor() {
    this.todos = [];
  }

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }
  deleteTodo(task) {
    this.todos = this.todos.filter(t => t.task !== task);
  }
}
