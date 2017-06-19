import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoBase } from './todo-base';

@Injectable()
export class TodosDataService {

private KEY: string = "MyTodoBase";

  constructor() {

   }

   public setTodoBase (td:TodoBase): void {
     localStorage.setItem(this.KEY, JSON.stringify(TodoBase.toJson(td)));
   }

   public getTodoBase () : TodoBase {
    let todoDate = localStorage.getItem(this.KEY);

    if (todoDate !== null){
        return TodoBase.fromJson(JSON.parse(todoDate));
    } else {
        let newTodoBase: TodoBase = new TodoBase ();
        localStorage.setItem(this.KEY, JSON.stringify(TodoBase.toJson(newTodoBase)));
        return newTodoBase;
    }
   }
}
