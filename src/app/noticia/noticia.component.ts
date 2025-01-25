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

  openModal(noticia: any): void {
    this.selectedNoticia = noticia;
  }

  closeModal(event?: MouseEvent): void {
    this.selectedNoticia = null;
  }
}
