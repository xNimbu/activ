import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cliente={user:'',password:''}
  errorMessage:string='';
  constructor(private router:Router) { }

  ngOnInit() {
  
  }
  onSubmit():Boolean {
    if(this.cliente.user === 'admin'&& this.cliente.password === 'admin'){
      this.router.navigate(['/home'])
      return true;
    }
    else{
      this.errorMessage="usuario o contraseña incorrecta"
    }
    return false;

  }
}
