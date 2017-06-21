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
    @Output()
   toggleComplete = new EventEmitter <Todo> ();
   todoDone: boolean = true;
   showFader: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete(todo: Todo) {
      {
    this.toggleComplete.emit(todo);
  }
  }

  deleteTodo(id: number ): void {
    this.delete.emit(id);
  }
}
