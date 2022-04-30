export class Cafe {
  id:number;
  nombre:string;
  region:string;
  sabor:string;
  altura:number;
  imagen:string;


  constructor(
    id:number,
    nombre:string,
    region:string,
    sabor:string,
    altura:number,
    imagen:string

  ){
    this.id = id;
    this.nombre = nombre;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen
  }

}
