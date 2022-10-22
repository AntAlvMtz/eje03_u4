import { TaskService } from './../services/task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
    this.task="";
    
    //this.input.setFocus();
    //captrar el evento del enter 
    //poner el foco del input cuando se agregue una tarea
  }

  public clickOnItem(){
    this.task="Tarea: ";
    
  }


  public removeTask(pos:number){
    this.taskService.removeTask(pos);
    this.tasks=this.taskService.getTasks();
  }

}
