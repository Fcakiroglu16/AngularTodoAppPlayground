import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoSave } from '../models/todo-save';
import { TodoUpdate } from '../models/todo-update';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/api/todos`);
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/api/todos/${id}`);
  }

  create(todo: TodoSave): Observable<boolean> {
    return this.http
      .post<Response>(`${this.baseUrl}/api/todos`, todo, {
        observe: 'response',
      })
      .pipe(map((response) => response.status === 201));
  }

  delete(id: number): Observable<boolean> {
    return this.http
      .delete<Response>(`${this.baseUrl}/api/todos/${id}`, {
        observe: 'response',
      })
      .pipe(map((response) => response.status === 204));
  }

  update(todo: TodoUpdate): Observable<boolean> {
    return this.http
      .put<Response>(`${this.baseUrl}/api/todos/${todo.id}`, todo, {
        observe: 'response',
      })
      .pipe(map((response) => response.status === 204));
  }
}
