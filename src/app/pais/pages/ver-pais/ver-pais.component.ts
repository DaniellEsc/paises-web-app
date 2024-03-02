import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Country[];

  constructor(private activeRoute: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {

    console.log('dasd');

    this.activeRoute.params
    .pipe(
      // switchMap( ( param ) => this.paisService.getPaisById( param.id )) no coge
      switchMap( ( {id} ) => this.paisService.getPaisById( id )),
      tap(console.log)
    ).subscribe(pais => this.pais = pais);

    // this.activeRoute.params
    // .subscribe( ({id}) => {
    //   this.paisService.getPaisById( id )
    //   .subscribe(pais => {
    //     console.log(pais);
    //   })
    // })
  }

}
