import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = `https://restcountries.com/v3.1/name`;

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{ // [] para un arr
    const url = `${this.apiUrl}/${termino}`;
    //mandamos de return un observable a por-pais.component.ts
    return this.http.get<Country[]>(url);
  }

}