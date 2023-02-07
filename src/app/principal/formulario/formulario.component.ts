import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  value1:number = 0;
  value2:number = 0;

  result1:number= 0;
  result2:number = 0;
  result3:number = 0;
  result4:number = 0;
  result1B:boolean=false;
  result2B:boolean=false;
  result3B:boolean=false;
  result4B:boolean=false;
  suma:boolean = false;
  resta:boolean = false;
  multi:boolean = false;
  dividir:boolean = false;
 
  sumar(){
    this.suma = !this.suma;
    this.result1 = (this.value1) + (this.value2);
  }
  restar(){
    this.resta = !this.resta;
    this.result2 = this.value1-this.value2;
  }
  multiplicar(){
    this.multi = !this.multi;
    this.result3 = this.value1*this.value2;
  }
  division(){
    this.dividir = !this.dividir;
    this.result4 = this.value1/this.value2;
  }

  calculate() {
    if(this.suma){
      this.result1B=true;
    }
    else{
      this.result1B=false;
    }
    if(this.resta){
      this.result2B=true;
    }
    else{
      this.result2B=false;
    }
    if(this.multi){
      this.result3B=true;
    }
    else{
      this.result3B=false;
    }
    if(this.dividir){
      this.result4B=true;
    }
    else{
      this.result4B=false;
    }
  }
}


