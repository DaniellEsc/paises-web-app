import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  styles: [
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class PaisComponent implements OnInit{


  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:boolean= false;
  paisesAll :Country[]=[];
  mostrarPaisesAll: boolean = true;

  constructor( private paisService:PaisService ) {}

  ngOnInit(): void {
      this.getPaises();
  }


  buscar(termino :string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarPaisesAll = false;

    this.paisService.buscarPais(this.termino)
    .subscribe(paises =>{
      console.log(paises);
      this.paises = paises;

    },(err)=>{
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,5)
    ,(err => this.paisesSugeridos = []));
  }

  buscarSuguerido(termino :string){
    this.buscar( termino );
    this.mostrarSugerencias = false;
    this.mostrarPaisesAll = false;

  }

  getPaises(){
    this.paisService.getPaises().subscribe(paises => this.paisesAll = paises.splice(0,27));
  }

}
