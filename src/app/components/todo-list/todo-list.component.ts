import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];

  constructor() { }

  ngOnInit() {
  }

  addTodo(newTodo: string) {
    this.todoList.push(newTodo);
    console.log("todoList: " + this.todoList);
  }

  onRemove(todoId: string) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].todoId === todoId) {
        this.todoList.splice(i, 1);
      }
    }
  }

}