import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './src/components/todo-list/todo-list.component';
import { AddTodoComponent } from './src/components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { FormModalComponent } from './src/components/UI/form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
