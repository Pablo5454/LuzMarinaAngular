import { Component } from '@angular/core';
import jsonNoticias from 'src/assets/noticias.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Noticia: any = jsonNoticias;
  title = 'luzMarinaAngular';

  
}
