import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template:` 
    <h1>{{titulo}}</h1>
    <h3>La base es:<strong>  {{base}}</strong></h3>
    <button (click)="acumular(base)">Acumular base</button>
    <h1><span>{{numero}}</span></h1>
    <button (click)="acumular(-base)">Restar base</button>
    
    `
})
export class ContadorComponent {
    public titulo: string = '01-Bases';
    public numero: number = 10;
    public base  : number =5 ;
  
    acumular(valor:number) {
      this.numero+=valor;
    }
}