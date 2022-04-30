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
  numeroFila:number=0;

  constructor(private cafeService: CafeService) { }


  getCafes():void{
    this.cafeService.getCafes().subscribe((cafes)=>{
      this.cafes= cafes;
    });


  }

  obtenerNumeroFila():number{
    return this.numeroFila;
  }
  ngOnInit() {
    this.getCafes();
  }

}
