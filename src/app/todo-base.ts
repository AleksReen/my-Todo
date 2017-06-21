import { Todo } from './todo';

export class TodoBase {

private _todoBase: Todo [] = [
    new Todo('Test1'),
    new Todo('Test2'),
    new Todo('Test3')
];

public static toJson(base: TodoBase) {
        return {
            todoBase: base._todoBase.map( todo => Todo.toJson(todo)),
        };
    }

    public static fromJson(json: any): any {
        let base = new TodoBase();
        base._todoBase = json.todoBase.map(todo => Todo.fromJson(todo));
        return base;
    }

    constructor(){}

    
    public getTodoBase() : Todo [] {
        return this._todoBase;
    }
    

    addTodo (todo:Todo) {
        this._todoBase.push(todo);
        return this._todoBase;
    }

    deleteTodo (id:number) {
        this._todoBase = this._todoBase.filter ( todo => todo.getId != id );
        return this._todoBase;
    }


    toggleTodo (todo:Todo){


         this._todoBase.forEach( el => { if (el.getId === todo.getId){
         
        if (el.getComplete) {
             el.setComplete = false;
        } else {
             el.setComplete = true;
        }

        }
        });
        console.log(todo.getComplete)
       return this._todoBase;
    }

 }
