import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  
  
  ngOnInit(): void {
  }

  agregar(){
    console.log("Prueba!!!");
  }
}
