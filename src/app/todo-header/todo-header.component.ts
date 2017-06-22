import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {MdDialog} from '@angular/material';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  public title: string;
  public description: string;
  @Output()
  create = new EventEmitter <Todo> ();
  @Input()
  allTodosCount:number;
  @Input()
  doneTodosCount:number;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog () {
    
  }

  createTodo (){
    let todo = new Todo (this.title, this.description);
    this.create.emit(todo);
    this.title = "";
    this.description = "";

  }
}
