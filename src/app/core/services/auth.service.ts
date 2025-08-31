import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  private key ='tm_is_admin';

  isAdmin(): boolean{
  
    return localStorage.getItem(this.key)==='true';


  }


  toggleAdmin(): void { localStorage.setItem(this.key, String(!
this.isAdmin())); }

}
