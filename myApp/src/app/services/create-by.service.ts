import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CreteByService {

  private nombre:string='';
  constructor(private loginService:LoginService){
    this.loginService.getUserId(this.loginService.getUserIdLogin()).subscribe(user=>{
      this.nombre=user.username
  });
  }

  getNombre():string{
      return this.nombre;
  }
}
