import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
   @Input()
   todoBaseList: Todo[] = [];
   @Output()
   delete = new EventEmitter <number> ();
   @Output()
   toggleComplete = new EventEmitter <Todo> ();
   todoDone: boolean = true;
   

  constructor() { }

  ngOnInit() {
  }

  toggleDescription() : void {
    let target = event.srcElement.nextElementSibling;
    $(target).slideToggle();
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  deleteTodo(id: number ): void {
    this.delete.emit(id);
  }
}
