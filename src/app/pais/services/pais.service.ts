import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private URL :string = 'https://restcountries.com/v3.1'

  get httpParams() {
    return  new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.URL }/name/${ termino }`;

    return this.http.get<Country[]>( url ,{params : this.httpParams} );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${ this.URL }/capital/${termino}`;

    return this.http.get<Country[]>(url, {params : this.httpParams});
  }

  getPaisById( id: string):Observable<Country>{
    const url = `${ this.URL }/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  // const url = `${ this.URL }/region/${region}?fields=name,capital,cca2,flags,population`;

  getPaisByRgion( region: string):Observable<Country[]>{

    // const params = new HttpParams().set('fields', 'name,capital,cca2,flags,population');

    const url = `${ this.URL }/region/${region}`;

    return this.http.get<Country[]>(url, {params : this.httpParams})
    .pipe(
      tap(console.log)
    );
  }

  getPaises(): Observable<Country[]> {
    const url = `${ this.URL }/all`;

    return this.http.get<Country[]>( url ,{params : this.httpParams} );
  }


}
