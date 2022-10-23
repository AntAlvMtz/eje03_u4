import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];
  private tasksCompletes: string[] = [];

  constructor() { 
      this.tasks.push("Tarea : Recojer y sacar la basura");
      this.tasks.push("Tarea : Hacer la tarea de Hibridas");
  }

  public getTasks():string[]{
    return this.tasks;
  }

  public getTasksCompletes():string[]{
    return this.tasksCompletes;
  }

  public getTask(pos:number):any{
    return this.tasks[pos];
  }

  public getTaskComplete(pos:number):any{
    return this.tasksCompletes[pos];
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public addTaskDescomplete(pos:number){
    this.tasks.push(this.getTaskComplete(pos));
    this.removeTaskComplete(pos);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1); //borra el elemento desde la posicion y el 2do parametro cuantos a partir de ahi.
  }

  public addTaskComplete(pos:number){
    this.tasksCompletes.push(this.getTask(pos));
    this.removeTask(pos);
  }

  public removeTaskComplete(pos:number){
    this.tasksCompletes.splice(pos,1); //borra el elemento desde la posicion y el 2do parametro cuantos a partir de ahi.
  }

}
