import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todo[] = [];
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.todoService.getAll().subscribe((x) => {
      this.todos = x;
    });
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoService.delete(id).subscribe((x) => {
          if (x === true) {
            this.load();

            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        });
      }
    });
  }

  isCompleted(id: number) {
    this.todoService.isCompleted(id).subscribe((x) => {
      let index = this.todos.findIndex((x) => x.id === id);

      this.todos[index].isCompleted = !this.todos[index].isCompleted;
    });
  }
}
