import { Component } from '@angular/core';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent {
  gifUrl: string = '../../assets/jesus-bailarin.gif'; // URL del GIF
  showGif: boolean = false; // Variable para controlar la visibilidad del GIF

  toggleGif(): void {
    this.showGif = !this.showGif; // Cambia el estado
  }

}

 
