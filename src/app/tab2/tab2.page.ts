import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasksCompletes:string[];
  public taskComplete:string;

  constructor(private taskService:TaskService) {
    this.tasksCompletes = this.taskService.getTasksCompletes();
  }



}
