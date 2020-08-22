import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private correo: string;
  
  private texto:string = "Usuario";

  constructor() { 
    
  }
  
  public guardar():void {
    alert("Se hizo click, el correo ingresado es " + this.correo);
  }

}
