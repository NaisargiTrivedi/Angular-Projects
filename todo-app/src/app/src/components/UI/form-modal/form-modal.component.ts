import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/src/Interface/todos';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  title: string;
  desc: string;

  @Input() todo:todos
  @Output() updateTodoEvent:EventEmitter<todos> = new EventEmitter();

  ngOnInit(): void {
    this.title = this.todo.title;
    this.desc = this.todo.desc;
  }

  updateTodoHandler = () => {
    this.todo.title = this.title;
    this.todo.desc = this.desc;
    this.updateTodoEvent.emit(this.todo);
  };
}
