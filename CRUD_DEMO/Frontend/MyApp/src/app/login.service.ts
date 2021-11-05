import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin : boolean = false;
  constructor() { }
  authenticate(username : string,password : string){
    if(username === "admin" && password === "admin@123"){
        this.isLogin = true;
        return true;
    }else{
        this.isLogin = false;
        return false;
    }

  }

  isLoggedIn(){
    return this.isLogin;
  }
}
