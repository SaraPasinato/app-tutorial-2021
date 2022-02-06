import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import { Task } from '../Task'
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:5001/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    /* //! for fake api
    const tasks=of( TASKS);
    return tasks;*/

    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
