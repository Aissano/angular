import { Injectable } from '@angular/core';
import { User } from './../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public gotIt(){
    let user:User;
    user = new User(JSON.parse(localStorage.getItem('user')));
    return user;
  }

  public keepit(user:User){
    return new Promise((resolve)=>{
  
    localStorage.setItem('user',JSON.stringify(user));
    resolve({'message': 'yohhh!Bienvenue dans myToDo!'});
    });
  }
}
