import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todos } from '../../Interface/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: todos[];
  @Output() deleteTodoEvent: EventEmitter<todos> = new EventEmitter();
  @Output() doneTodoEvent: EventEmitter<todos> = new EventEmitter();
  @Output() updateTodoEvent: EventEmitter<todos> = new EventEmitter();

  constructor() { }

  deleteTodoHandler = (todo: todos) => {
    this.deleteTodoEvent.emit(todo);
  };

  doneTodoHandler = (todo: todos) => {
    this.doneTodoEvent.emit(todo);
  };

  updateTodoEventHandler = (todo: todos) => {
    this.updateTodoEvent.emit(todo);
  };
}
