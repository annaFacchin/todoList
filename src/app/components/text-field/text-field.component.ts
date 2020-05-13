import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  inputValue: string;
  nextTodo: number;

  @Output() addTodoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nextTodo = 1;
  }

  addTodo() {
    this.addTodoEvent.emit({
      todoId: this.nextTodo,
      todo: this.inputValue,
    });
    this.nextTodo++;
    this.inputValue = "";
  }

}
