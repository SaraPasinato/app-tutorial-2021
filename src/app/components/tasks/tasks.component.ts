import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks=this.tasks.filter(t=>t.id !== task.id)));

  }
  toggleRemainder(task:Task){
    task.remainder = !task.remainder;
   // console.log(task.remainder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
