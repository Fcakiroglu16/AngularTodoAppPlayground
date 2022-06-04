import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'todo-add',
    component: TodoAddComponent,
  },
  {
    path: 'todo-update/:id',
    component: TodoUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
