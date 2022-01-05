import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from 'src/app/model/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class AuthService {
  data:Auth
  error: any;
  constructor(private httpClient: HttpClient, private router:Router) { }
  
  login({user, pass}) {
    this.error = null;
    const params =  new HttpParams()
    .set('user', user)
    .set('pass', pass);
    this.httpClient.get<Auth>(`http://localhost:3000/login`, {params}) //{params: params}
    .subscribe(
      res => {
      this.data = res;
      this.router.navigateByUrl('search');
    },
    err => this.error = err
    );
  }

  loguot(){
    this.data = null
    this.router.navigateByUrl('login');
  }

  isLogged() { 
    const isAuth = this.data && this.data.token ? true : false;
    return isAuth
  }
}