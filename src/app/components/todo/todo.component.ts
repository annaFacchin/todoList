import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: number;
  @Input()
  todoId: string;

  nextTodo: number;

  toggle:boolean = true;

  @Input() todoList = [];
  @Output() onRemoveEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  remove() {
    this.onRemoveEvent.emit(this.todoId);
    console.log("todoList: " + this.todoList);
  }

  toggleText(){
    this.toggle = !this.toggle;
  }

}
