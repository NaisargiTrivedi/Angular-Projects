import { Component, EventEmitter, Output } from '@angular/core';
import { todos } from '../../Interface/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  desc: string;

  @Output() addTodoEvent: EventEmitter<todos> = new EventEmitter();

  addTodo = () => {
    const date = new Date();
    const newTodo: todos = {
      id: ~~(Math.random()*100),
      title: this.title,
      desc: this.desc,
      isActive: true,
      createdDate: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
    };
    console.log('newtodo', newTodo);
    this.addTodoEvent.emit(newTodo);
  };
}
