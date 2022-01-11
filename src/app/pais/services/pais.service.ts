import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = `https://restcountries.com/v3.1`;
  private apiUrlCap: string = `https://restcountries.com/v3.1/capital`;

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{ // [] para un arr
    const url = `${this.apiUrl}/name/${termino}`;
    //mandamos de return un observable a por-pais.component.ts
    return this.http.get<Country[]>(url);
  }

  buscarCap(termino: string): Observable<Country[]>{
    const urlCap = `${this.apiUrlCap}/${termino}`;
    return this.http.get<Country[]>(urlCap);
  }

  getPaisPorAlpha(id: string): Observable<Country[]>{
    const urlCap = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(urlCap);
  }

  

}
