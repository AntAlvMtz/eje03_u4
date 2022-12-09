import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks'
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];

  constructor(private firestore: AngularFirestore) { 
      /*this.tasks.push("Tarea : Recojer y sacar la basura");
      this.tasks.push("Tarea : Hacer la tarea de Hibridas");*/
  }

  public getTasks(): Observable<Tasks []>{
    return this.firestore.collection('tasks').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data() as Tasks;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  };
  /*public getTasksCompletes():string[]{
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
  }*/

  public removeTask(id:string){
    //this.tasks.splice(pos,1); //borra el elemento desde la posicion y el 2do parametro cuantos a partir de ahi.
    this.firestore.collection('tasks').doc(id).delete();
  }

  public addTask(task:Tasks){
    /*this.tasksCompletes.push(this.getTask(pos));
    this.removeTask(pos);*/
    this.firestore.collection('tasks').add(task);
  }

  public updateTask(id:string,complete:boolean){
    /*this.tasks.push(this.getTaskComplete(pos));
    this.removeTaskComplete(pos);*/
    this.firestore.collection('tasks').doc(id).update({"complete":complete});
  }

  public getTasksDescompletes():Observable<Tasks []>{
    return this.firestore.collection('tasks', ref => ref.where('complete','==',false)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data() as Tasks;
          const id = a.payload.doc.id;
          //console.log(data.complete);
            return { id, ...data };
        })
      })
    )
  }

  public getTasksCompletes():Observable<Tasks []>{
    return this.firestore.collection('tasks', ref => ref.where('complete','==',true)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data() as Tasks;
          const id = a.payload.doc.id;
          //console.log(data.complete);
            return { id, ...data };
        })
      })
    )
  }

}
