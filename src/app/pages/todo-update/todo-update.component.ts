import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { TodoService } from 'src/app/services/todoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css'],
})
export class TodoUpdateComponent implements OnInit {
  constructor(
    private todosService: TodoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}
  todoForm = new FormGroup({
    content: new FormControl(''),
    id: new FormControl(''),
  });
  id: number | undefined;
  ngOnInit(): void {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.todosService.get(this.id).subscribe((x) => {
      this.todoForm.get('content')?.setValue(x.content);
      this.todoForm.get('id')?.setValue(x.id);
    });
  }
  update() {
    this.todosService.update(this.todoForm.value).subscribe((x) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your todo has been updated',
        showConfirmButton: false,
        timer: 1500,
      });

      this.router.navigateByUrl('/todos');
    });
  }
}
