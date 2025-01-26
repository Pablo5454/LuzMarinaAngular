import { Component } from '@angular/core';
import data from '../../assets/noticias.json';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent {
  noticias = data;
  selectedNoticia: any = null;
  fontSize: number = 16; // Tamaño inicial de la fuente

  openModal(noticia: any): void {
    this.selectedNoticia = noticia;
    this.fontSize = 16; // Reinicia el tamaño de la fuente al abrir el modal
  }

  closeModal(event?: MouseEvent): void {
    this.selectedNoticia = null;
  }

  increaseFontSize(): void {
    if (this.fontSize < 30) {
      this.fontSize += 2;
    }
  }

  decreaseFontSize(): void {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
}