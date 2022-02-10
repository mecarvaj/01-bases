import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45;

    
    public getNombreCapitalizado() : string {
        return this.nombre.toUpperCase(); 
    }
    
    obtenerNombre(): string{
        return `${this.nombre } - ${this.edad}`;
    }
    cambiarNombre(): void{
        this.nombre = 'Spiderman'
    }
    
    public setEdad() {
        this.edad= 30;
    }
    
}