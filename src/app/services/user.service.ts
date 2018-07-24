import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient){
    
  }

  usersSubject = new Subject<any[]>();

    private users = [
        {
          id: 1,
          name: 'MOREAU Jérémy'
        },
        {
            id: 2,
          name: 'MOREAU Myriam'
        },
        {
            id: 3,
          name: 'MOREAU Frederic'
        },
        {
            id: 4,
          name: 'MOREAU Nelly'
        }
      ];

      getUsers(){
        return this.users;
      }

      getUserById(id: number) {
        const user = this.users.find(
          (s) => {
            return s.id === id;
          }
        );
        if(user === undefined) return false
        return user;
    }

    emitUsersSubject() {
      this.usersSubject.next(this.users.slice());
    }

    addUser(name: string) {
      const userObject = {
        id: 0,
        name: ''
      };
      userObject.name = name;
      userObject.id = this.users[(this.users.length - 1)].id + 1;
      this.users.push(userObject);
      this.emitUsersSubject();
    }

    getUsersFromServer() {
      this.httpClient
        .get<any[]>('http://127.0.0.1:3000/', {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
        .subscribe(
          (response) => {
            console.log(response)
            this.users = response;
            this.emitUsersSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
}