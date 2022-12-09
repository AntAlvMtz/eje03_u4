import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';
import { Tasks } from '../models/tasks';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasksCompletes:Tasks[];
  public taskComplete:Tasks;

  constructor(private taskService:TaskService,private alertController:AlertController) {
    //this.tasksCompletes = this.taskService.getTasksCompletes();
    this.taskService.getTasksCompletes().subscribe(res =>{
      this.tasksCompletes = res;
      console.log(this.tasksCompletes);
    })
  }

  public addTaskDescomplete(id:string){
    this.taskService.updateTask(id,false);
  }

  public async removeTaskComplete(id: string) {
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

}
