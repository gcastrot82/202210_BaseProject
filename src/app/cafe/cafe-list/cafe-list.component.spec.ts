// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';


// import { CafeListComponent } from './cafe-list.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('CafeListComponent', () => {
//   let component: CafeListComponent;
//   let fixture: ComponentFixture<CafeListComponent>;



//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [ CafeListComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CafeListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });



/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { Cafe } from './cafe';




describe('BookListComponent', () => {
 let component: CafeListComponent;
 let fixture: ComponentFixture<CafeListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafeListComponent ],
     providers: [ CafeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CafeListComponent);
   component = fixture.componentInstance;

   component.cafes = [
    //  new Cafe(faker.lorem.sentence(), faker.name.firstName(), faker.datatype.number())
    new Cafe(50, "Café La consolida","Blend","Norte del Valle" , "Achocolatado",1100,"http://asdasdasd"),
    new Cafe(60, "Café Patio Bonito","Café de Origen","Toro" , "Acaramelado",1200,"http://asdasdasd"),
    new Cafe(70, "Café La quiebra","Blend","La Union" , "Frutos Rojos",1150,"http://asdasdasd")
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('Registros creados', () => {
   expect(component).toBeTruthy();
 });

 it("Tabla creada con encabezado", () => {
  expect(debug.query(By.css("thead")).childNodes.length).toEqual(1)
});

 it("El resultado del test, tiene una tabla con tres filas y un encabezado", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toEqual(4)
 });

 it('consultar un registro de los anteriores tres creados ', () => {
   const td = debug.query(By.css('td'));
   const content: HTMLElement = td.nativeElement;
   expect(content.textContent).toEqual('50')
 });

});
