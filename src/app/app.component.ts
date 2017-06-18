import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 testTodo: Todo;

 constructor (){
    this.testTodo = new Todo ("testTodo");
    console.log(this.testTodo);
 }


}
