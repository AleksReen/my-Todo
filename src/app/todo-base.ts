import { Todo } from './todo';
export class TodoBase {

    private _todoBase: Todo [] = [];

    constructor(){}

    
    public get getTodoBase() : Todo [] {
        return this._todoBase;
    }
    

 }
