import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CreteByService {

  private nombre='';
  constructor(private loginService:LoginService){
  }

  public getNombre():string{
    
      this.loginService.getUserId(this.loginService.getUserIdLogin()).subscribe(user=>{
          this.nombre=user.username
      });
      console.log(this.nombre);
      return this.nombre
  }
}
