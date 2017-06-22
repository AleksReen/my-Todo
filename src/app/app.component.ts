import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodosDataService } from './todos-data.service';
import { TodoBase } from './todo-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public todoBaseList: Todo [] = [];
public todoBase: TodoBase;
public title: string;
public description: string;
public allTodosCount: number;
public doneTodosCount: number;


 constructor (private todoService: TodosDataService) {

 }

 ngOnInit() {

   this.todoBase = this.todoService.getTodoBase();
   this.todoBaseList = this.todoBase.getTodoBase();
   this.counterTodos(this.todoBaseList);
 }

 toggleTodo (todo: Todo){
    this.todoBase.toggleTodo(todo);
    this.todoService.setTodoBase(this.todoBase);
    this.ngOnInit();
 }

 addTodo (todo: Todo): void {
   this.todoBaseList = this.todoBase.addTodo(todo);
   this.todoService.setTodoBase(this.todoBase);
   this.counterTodos(this.todoBaseList);
 }

 deleteTodo (id: number): void {
   this.todoBaseList = this.todoBase.deleteTodo(id);
   this.todoService.setTodoBase(this.todoBase);
   this.counterTodos(this.todoBaseList);
 }

  counterTodos(list: Todo[]): void {
    this.allTodosCount = list.length;
    list = list.filter(todo => todo.getComplete === true);
    this.doneTodosCount = list.length;
 }
}
