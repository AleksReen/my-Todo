import { Todo } from './todo';

export class TodoBase {

private _todoBase: Todo [] = [];

public static toJson(base: TodoBase) {
        return {
            todoBase: base._todoBase.map( todo => Todo.toJson(todo)),
        };
    }

    public static fromJson(json: any): any {
        let base = new TodoBase();
        base._todoBase = json.todobase.map(todo => Todo.fromJson(todo));
        return base;
    }

    constructor(){}

    addTodo (todo:Todo) {
        this._todoBase.push(todo);
        return this._todoBase;
    }

    deleteTodo (id:number) {
        this._todoBase = this._todoBase.filter ( todo => todo.getId != id );
        return this._todoBase;
    }

    


 }
