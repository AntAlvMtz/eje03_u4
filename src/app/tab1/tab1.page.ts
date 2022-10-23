import { TaskService } from './../services/task.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('input') myInput;

  public tasks:string[];
  public task:string;

  constructor(private taskService:TaskService) {
    this.tasks = this.taskService.getTasks();
    this.task = "Tarea : ";
  }

  public addTask(){
    this.taskService.addTask(this.task);
    this.tasks=this.taskService.getTasks();
    console.log(this.tasks);
    this.myInput.setFocus();
    this.task="";
  }

  public clickOnItem(){
    this.task="Tarea: ";
    
  }


  public removeTask(pos:number){
    this.taskService.removeTask(pos);
    this.tasks=this.taskService.getTasks();
  }

  public addTaskComplete(pos:number){
    this.taskService.addTaskComplete(pos);
    this.tasks=this.taskService.getTasks();
  }

}
