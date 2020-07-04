import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    personajes: string[] = ['Arnold Schwarzenegger', 'Sarah Connor', 'John Connor','T-1000'];
    nombre    : string   = 'Computación Cuántica';
    nombre2   : string   = 'AlLAn WeIsSeR VerDeSsI'
    arreglo   : number[] = [1,2,3,4,5,6,7,8,9,10];
    PI        : number   = Math.PI;
    porcentaje: number   = 0.234;
    salario   : number   = 1234.5;
    fecha     : Date     = new Date();
    activar   : boolean  = true;

    idioma    : string = 'fr';

    videoUrl  : string = 'https://www.youtube.com/embed/pwU22xcDiJ4';

    valorPromesa = new Promise<string>( (resolve) => {

      setTimeout(() => {
        resolve('llegó la data');
      }, 4500);
    });

    heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
        calle: 'Primera',
        casa: 20
      }
    }

}
