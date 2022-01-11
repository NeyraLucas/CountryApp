import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais !: Country;

  constructor( private activatedRouter: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    //Forma 1 - Larga
   /*  this.activatedRouter.params
    .subscribe( ({id}) =>{
      //los params vienen del path de la ruta que definimos
      console.log(id);
    
      this.paisService.getPaisPorAlpha(id)
        .subscribe(pais =>{
          
          console.log(pais);
          
        })
      
    }) */

    //Forma 2 - corta - se tuliza swithMap que es de rxjs
    this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
        tap(console.log)
        )
      
      .subscribe( pais => this.pais = pais[0] );


  }

}
