import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todoId: number;
  @Input()
  todo: string;

  @Output() onRemoveEvent = new EventEmitter();

  toggle: boolean = true;

  constructor() { }

  ngOnInit() { }

  remove() {
    this.onRemoveEvent.emit(this.todoId);
  }

  toggleText() {
    this.toggle = !this.toggle;
  }

}
