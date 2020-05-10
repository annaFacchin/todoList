import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  nextTodo: number;

  constructor() { }

  ngOnInit() {
  }

  onRemove(todoId: string) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].todoId === todoId) {
        this.todoList.splice(i, 1);
      }
    }
  }

}