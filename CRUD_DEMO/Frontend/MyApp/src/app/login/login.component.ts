import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string ='';
  password : string = '';
  errorMessage : string = '';
  constructor(public loginService : LoginService,public router : Router) { }

  ngOnInit(): void {
  }
  submit(){
    let result = this.loginService.authenticate(this.username,this.password);
    if(result){
      this.router.navigate(['/home'])
    }else{
      this.errorMessage='Authentication Failed !!! Please check username and password';
    }
  }
}
