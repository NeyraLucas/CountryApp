import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayErr: boolean =  false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }


  buscar(termino: string){
    this.hayErr = false;
    this.termino = termino;
    //para que un observable se dispare se necesita un subscribe
    this.paisService.buscarPais(this.termino).subscribe( resp =>{
      console.log(resp);
      //almacenamos los paises en el arr
      this.paises = resp;
      
    }, (err) =>{
      this.hayErr = true;
      this.paises = [];
    } );
    
  }

  sugerencias(termino: string){
    this.hayErr = false;
  }

}
