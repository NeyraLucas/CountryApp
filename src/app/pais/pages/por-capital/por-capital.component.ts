import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayErr: boolean =  false;
  paises: Country[] = [];

  constructor(private paiseService: PaisService) { }

  buscarC(termino: string){
    this.hayErr = false;
    this.termino = termino;

    this.paiseService.buscarCap(this.termino).subscribe( cap =>{
      this.paises = cap; // le pasasamos las capitales
    }, (err) =>{
      this.hayErr = true;
      this.paises = [];
    });
  
  }

}
