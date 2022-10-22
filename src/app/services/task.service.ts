import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];

  constructor() { 
      this.tasks.push("Tarea : Recojer y sacar la basura");
      this.tasks.push("Tarea : Hacer la tarea de Hibridas");
  }

  public getTasks():string[]{
    return this.tasks;
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1); //borra el elemento desde la posicion y el 2do parametro cuantos a partir de ahi.
  }

}
