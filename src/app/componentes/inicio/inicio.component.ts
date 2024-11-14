import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PruebaService } from '../../servicios/prueba/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
//Instanciar en una variable el formulario reactivo
formularioForm;
//FIN Instanciar en una variable el formulario reactivo
//Crear un constructor: Esto permita inicializar variables con atributos y valores
constructor(private formBuilder: FormBuilder, private pruebaSrv: PruebaService ){
  this.formularioForm = this.formBuilder.group({
    nombre: '',
    apellido: ''
  });
}  
//FIN Crear un constructor: Esto permita inicializar variables con atributos y valores

//Creamos un programa principal al cargar la web. Este se ejecuta al momento de cargar la página Web
ngOnInit() {
  console.log("hola");
}
//Fin programa principal

enviarDatos(){
  //Podemos crear una variable donde almacenaremos los datos capturados (opcional)
  let datos_formulario = this.formularioForm.value;
  //Fin variable datos formulario

  //Imprimir por consola los datos capturados en la variable
  console.log(datos_formulario);
  console.warn('Los datos capturados son:', this.formularioForm.value);
  this.formularioForm.reset();
  
  //Fin imprimir por consola
}

  //Funcion que activa una función del servicio Prueba
  activar_invocable1(){
    let dato_desde_servicio;
    dato_desde_servicio = this.pruebaSrv.Invocable_1();
    console.log(dato_desde_servicio);
  }
  activar_invocable2(){
    let dato_desde_servicio;
    dato_desde_servicio = this.pruebaSrv.Invocable_2();
    console.log(dato_desde_servicio);
  }
  activar_invocable3(){
    let dato_desde_servicio;
    dato_desde_servicio = this.pruebaSrv.Invocable_3();
    console.log(dato_desde_servicio);
  }
  Invocable_Sumar(){
    let dato_desde_servicio;
    dato_desde_servicio = this.pruebaSrv.Sumar(3,4);
    console.log(dato_desde_servicio);
    if(dato_desde_servicio  <=4){
      console.log(dato_desde_servicio);
      console.log("Reprobado");
    }else{
      console.log(dato_desde_servicio);
      console.log("Aprobado")
    }
  }
}
