import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

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

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(id: number ): void {
    this.delete.emit(id);
  }



}
