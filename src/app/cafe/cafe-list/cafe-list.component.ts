import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from './cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe>= [];

  cantidadCafeTipoBlend:number=0;
  cantidadCafeTipoOrigen:number=0;

  constructor(private cafeService: CafeService) { }


  getCafes():void{
    this.cafeService.getCafes().subscribe((cafes)=>{
      this.cafes= cafes;
    });

  }
  obtenerCantidadTipoCafe(cafe:string):void{
    if (cafe=='Blend'){
      this.cantidadCafeTipoBlend+=1;
    }
    else if(cafe=='Café de Origen'){
      this.cantidadCafeTipoOrigen+=1;
    }


  }



  ngOnInit() {
    this.getCafes();
  }

}
