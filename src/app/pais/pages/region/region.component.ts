import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones: string[] = ['africa','americas','asia', 'europe', 'oceania']
  regionActiva :string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region:string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.getPaisByRgion(region).subscribe(paises => this.paises = paises);
    // this.buscar(this.regionActiva)

  }

  getClassCss(region:string){
    return ( region === this.regionActiva) ? 'btn btn-primary mx-2 mt-2':'btn btn-outline-primary mx-2 mt-2';
  }



}
