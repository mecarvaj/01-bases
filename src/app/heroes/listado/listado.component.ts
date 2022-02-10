import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  
  heroes: string[] = ['Spiderman','Hulk', 'Thor','Ironman']
  heroeBorrado =  '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ''; 
  }
}
