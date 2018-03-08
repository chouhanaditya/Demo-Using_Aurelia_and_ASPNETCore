import { useView, inject } from "aurelia-framework";
import { ToDoService } from "../../services/toDoService";
import ToDo from "../../models/todo";

@inject(ToDoService)
export class Test{
    public toDoList: ToDo[];
    isNewTodo: boolean = false;
    
    new_todo_description: string;
    new_todo_status: boolean;
    new_todo_id: number;

    isEdit=[] as boolean[];

    constructor(public ts: ToDoService){
        this.toDoList = this.ts.getToDoList();    
        console.log('constructor'+this.toDoList.length);
    }
    activate()
    {
        console.log('activate');
        for(let i=0; i < this.toDoList.length; i++) {
              this.isEdit[i]=false;
             };    
    }
    
    addToDo()
    {
        this.new_todo_id = Math.floor(Math.random()*100);
        this.toDoList = this.ts.addToDo(new ToDo (this.new_todo_id, this.new_todo_description,this.new_todo_status));
      
        this.isNewTodo = false;
        this.new_todo_description='';
        this.new_todo_status=false;
    }
    removeToDo(id: number)
    {
        this.toDoList = this.ts.removetoDo(id);
    }
    editToDo(id: number)
    {
        this.toDoList = this.ts.removetoDo(id);
    }
       
}
