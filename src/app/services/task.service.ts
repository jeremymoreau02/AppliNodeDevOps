import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient){
    
  }

  tasksSubject = new Subject<any[]>();
  taskSubject = new Subject<any[]>();

    private tasks = [
      ];

      private task = [];

      getTasks(){
        return this.tasks;
      }

     getTaskById(id: number) {
         this.httpClient
        .get<any[]>('http://127.0.0.1:3000/tasks/'+id, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
        .subscribe(
          (response) => {
            this.task.push(response["User"])
            this.task.push(response["UserId"])
            this.task.push(response["completed"])
            this.task.push(response["id"])
            this.task.push(response["title"])
            this.emitTaskSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

    deleteTask(id: number) {
      this.httpClient
     .delete<any[]>('http://127.0.0.1:3000/tasks/'+id, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
     .subscribe(
       (response) => {
         console.log(response)
         this.getTasksFromServer()
       },
       (error) => {
         console.log('Erreur ! : ' + error);
       }
     );
 }

    modifyTask(id: number, title: string, userId: number, completed: boolean) {
      const taskObject = {
        title: title,
        completed: completed,
        UserId: userId
      };
      this.httpClient
      .post<any[]>('http://127.0.0.1:3000/tasks/'+id, taskObject, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
      .subscribe(
        (response) => {
          console.log(response)
          this.getTasksFromServer()
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }

    emitTasksSubject() {
      this.tasksSubject.next(this.tasks.slice());
    }

    emitTaskSubject() {
      this.taskSubject.next(this.task.slice());
    }

    addTask(title: string, userId: number) {
      const taskObject = {
        title: title,
        completed: false,
        UserId: userId
      };
      this.httpClient
        .put<any[]>('http://127.0.0.1:3000/'+userId+'/tasks', taskObject, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
        .subscribe(
          (response) => {
            console.log(response)
            this.tasks = response;
            this.emitTasksSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
      );
    }

    getTasksFromServer() {
      this.httpClient
        .get<any[]>('http://127.0.0.1:3000/tasks', {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
        .subscribe(
          (response) => {
            console.log(response)
            this.tasks = response;
            this.emitTasksSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
}