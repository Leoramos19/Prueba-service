import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }
  
  Invocable_1(){
    let dato = "Funcion 1 invocada";
    return dato;
  }
  Invocable_2(){
    let dato = "Funcion 2 invocada";
    return dato;
  }
  Invocable_3(){
    let dato = "Funcion 3 invocada";
    return dato;
  }
  Sumar(numero1:any, numero2:any){
    let dato;
    return (numero1 + numero2)/2;
  }
}
