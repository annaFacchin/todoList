import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input()
  todo: number;
  @Input()
  todoId: string;

  todoList = [];
  nextTodo: number;

  @Output()
  selectedItems = [];

  constructor() { }

  ngOnInit() {
    this.nextTodo = 1;
    for (let i = 1; i < this.nextTodo; i++) {
      this.todoList.push({ initialValue: i + ": ", todoId: i });
    }
  }

  addTodo(newTodo: string) {
    this.todoList.push({
      initialValue: newTodo,
      todoId: this.nextTodo,
    });
    this.nextTodo++;
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
