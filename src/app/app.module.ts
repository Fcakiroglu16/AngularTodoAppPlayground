import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent,
    TodoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.baseUrl },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
