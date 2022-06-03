import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todo[] = [];
  ngOnInit(): void {
    this.todoService.getAll().subscribe((x) => {
      this.todos = x;
    });
  }
}
