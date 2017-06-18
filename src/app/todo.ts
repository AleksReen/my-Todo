export class Todo {
    private _id: number;
    private _title: string;
    private _description: string;
    private _complete: boolean;
    private _date: string;

    constructor (title:string, description?: string, id?:number, complete?: boolean, date?:string) {
        
        this._title = title;
        
        if (description === null || description === undefined){
            this._description = "";
        } else {
            this._description = description;
        }
        
        if (id === null || id === undefined){
            this._id = Math.random();
        } else {
            this._id = id;
        }

         if (complete === null || complete === undefined){
            this._complete = false;
        } else {
            this._complete = complete;
        }

         if (date === null || date === undefined){
            this._date = new Date().toLocaleDateString();
        } else {
            this._date = date;
        }
    }
    
    public get getId() : number {
        return this._id;
    }
}
