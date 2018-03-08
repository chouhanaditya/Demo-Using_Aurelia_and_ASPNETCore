
import toDo from "../models/todo";

export class ToDoService{
     todoList: toDo[]= [
         new toDo(1,'Email Jane.',false),
         new toDo(2,'Checkin your code on Github',true),
         new toDo(3,'Pickup your laundry.',false)];

    getToDoList()
    {
        return this.todoList.slice();
    }

    addToDo(todo: toDo)
    {
        this.todoList.push(todo);
        return this.todoList.slice();
    }

    removetoDo(id: number)
    {
        this.todoList = this.todoList.filter(x => x.id !== id);
        return this.todoList.slice();
    }
    // getNextToDoID() {
    //     if (this.todoList.length === 0) {
    //       return 1;
    //     } else {
    //         var last_id= this.todoList.slice(-1).pop();
    //         console.log(last_id['id']);
    //         return 4;
    //     }
    //   }
}