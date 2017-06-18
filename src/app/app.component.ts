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



 constructor (private todoService: TodosDataService){
    
 }

 ngOnInit() {
   
 }


}
