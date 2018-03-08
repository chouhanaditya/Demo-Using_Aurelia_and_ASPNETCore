export default class ToDo {
    id: number;
    toDo_Description: string;
    todo_Status: boolean;

    public constructor(id: number, description: string, status:boolean){
            this.id = id;
            this.toDo_Description = description;
            this.todo_Status = status;
    }
}