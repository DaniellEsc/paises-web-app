import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {

  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:boolean= false;

  constructor(private paisService : PaisService) {}

  buscar(termino:string){
     this.hayError = false;
     this.termino = termino;

     this.paisService.buscarCapital(this.termino)
     .subscribe(paises => {
        this.paises = paises;
     },(err)=>{
      this.hayError = true;
      this.paises = [];
     });
  }

  sugerencias( termino :string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarCapital( termino )
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,5)
    ,(err => this.paisesSugeridos = []));
  }

  buscarSuguerido(termino :string){
    this.buscar( termino );
    this.mostrarSugerencias = false;

  }



}
