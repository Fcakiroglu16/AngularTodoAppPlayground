import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoAddComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ { provide: "BASE_API_URL", useValue: environment.baseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {






  
}
