import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todoservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  constructor(private todosService: TodoService, private router: Router) {}

  todoForm = new FormGroup({
    content: new FormControl(''),
  });
  ngOnInit(): void {}

  save() {
    this.todosService.create(this.todoForm.value).subscribe((x) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your todo has been saved',
        showConfirmButton: false,
        timer: 1500,
      });

      this.router.navigateByUrl('/todos');
    });
  }
}
