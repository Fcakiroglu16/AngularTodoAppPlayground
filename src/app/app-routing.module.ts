import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
