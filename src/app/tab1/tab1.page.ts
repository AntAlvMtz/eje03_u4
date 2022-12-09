import { TaskService } from './../services/task.service';
import { Tasks } from './../models/tasks';
import { Component, ViewChild } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('input') myInput;

  public tasks:Tasks[];
  public task: Tasks;
  public value:string;

  constructor(private taskService:TaskService, private alertController:AlertController) {
    //this.tasks = this.taskService.getTasks();
    //this.task = "Tarea : ";
    this.taskService.getTasksDescompletes().subscribe(res =>{
      this.tasks = res;
      console.log(this.tasks);
    })
  }

  public addTask(){
    this.task = {
      task: this.value,
      complete: false,
    }
    this.taskService.addTask(this.task);
    console.log(this.tasks);
    this.myInput.setFocus();
    this.value="";
  }

 public clickOnItem(){
    this.value="Tarea: ";
    
  }


  public async removeTask(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar?',
      message: 'Esto es una confirmación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            this.taskService.removeTask(id);
          }
        }
      ]
    });

    await alert.present();



  }

  public addTaskComplete(id:string){
    this.taskService.updateTask(id,true);
  }

}
