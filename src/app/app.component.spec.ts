import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
      declarations: [AppComponent,CafeListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'base-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('base-project');
  });


});

// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';


// import { HttpClientModule } from '@angular/common/http';
// import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';
// import { CafeService } from './cafe/cafe.service';
// import { Cafe } from './cafe/cafe-list/cafe';




// describe('BookListComponent', () => {
//  let component: CafeListComponent;
//  let fixture: ComponentFixture<CafeListComponent>;
//  let debug: DebugElement;

//  beforeEach(async(() => {
//    TestBed.configureTestingModule({
//      imports: [HttpClientModule],
//      declarations: [ CafeListComponent ],
//      providers: [ CafeService ]
//    })
//    .compileComponents();
//  }));

//  beforeEach(() => {
//    fixture = TestBed.createComponent(CafeListComponent);
//    component = fixture.componentInstance;

//    component.cafes = [
//     //  new Cafe(faker.lorem.sentence(), faker.name.firstName(), faker.datatype.number())
//    new Cafe(50, "Café La consolida","Blend","Norte del Valle" , "Achocolatado",1100,"http://asdasdasd")
//     // new Cafe(60, "Café Patio Bonito","Café de Origen","Toro" , "Acaramelado",1200,"http://asdasdasd"),
//     // new Cafe(70, "Café La quiebra","Blend","La Union" , "Frutos Rojos",1150,"http://asdasdasd")
//    ]

//    fixture.detectChanges();
//    debug = fixture.debugElement;
//  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });

//  it("El componente tiene una tabla", () => {
//    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThanOrEqual(0);
//   //  expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThanOrEqual;
//  });

//  it('should have an dd element ', () => {
//    const td = debug.query(By.css('td'));
//    const content: HTMLElement = td.nativeElement;
//    expect(content.textContent).toEqual(component.cafes[0].nombre)
//  });

// });
