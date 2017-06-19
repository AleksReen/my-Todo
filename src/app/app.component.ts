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


 constructor (private todoService: TodosDataService) {}

 ngOnInit() {
   this.todoBase = this.todoService.getTodoBase();
   this.todoBaseList = this.todoBase.getTogoBase();
 }

 addTodo (todo:Todo) : void {
   this.todoBaseList = this.todoBase.addTodo(todo);
   this.todoService.setTodoBase(this.todoBase);
 }

 deleteTodo (id:number) : void {
   this.todoBaseList = this.todoBase.deleteTodo(id);
   this.todoService.setTodoBase(this.todoBase);
 }
}
