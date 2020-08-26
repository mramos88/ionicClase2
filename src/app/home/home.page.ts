import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private correo: string;
  private contrasenia: string;
  private rcontrasenia: string;
  private sexo = "m";
  private textSexo: string;
  
  private texto:string = "Usuario";

  constructor() { 
    
  }
  
  public guardar(): void {
    if (this.contrasenia == this.rcontrasenia) {
       this.textSexo = "Femenino";
      if (this.sexo == "m") {
        this.textSexo = "Masculino";
      }
      alert("Se hizo click, el correo ingresado es " + this.correo +
        ". El sexo es " + this.textSexo);  
    } else {
      alert("Las constraseñas son incorrectas!");
    }

    
  }

}
