import { Component } from '@angular/core';
import { todos } from './src/Interface/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos === null) {
      return [];
    }
    return JSON.parse(todos);
  };

  todos: todos[] = this.getTodos();

  addTodo = (todo: todos) => {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  deleteTodo = (todo: todos) => {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  toggleTodo = (todo: todos) => {
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  updateTodo = (todo: todos) => {
    const index = this.todos.indexOf(todo);
    this.todos[index] = todo;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };
}
