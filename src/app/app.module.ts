import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Asegúrate de importar NgbModule
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DonacionComponent } from './donacion/donacion.component';
import { ProyectosBigFotoComponent } from './proyectos-big-foto/proyectos-big-foto.component';
import { ProyectosTextoComponent } from './proyectos-texto/proyectos-texto.component';
import { VoluntariosNuestraMisionComponent } from './voluntarios-nuestra-mision/voluntarios-nuestra-mision.component';
import { VoluntariosComoAyudarComponent } from './voluntarios-como-ayudar/voluntarios-como-ayudar.component';
import { VoluntariosCitaBiblicaComponent } from './voluntarios-cita-biblica/voluntarios-cita-biblica.component';
import { VoluntariosBotonDonacionComponent } from './voluntarios-boton-donacion/voluntarios-boton-donacion.component';
import { NoticiasCardComponent } from './noticias-card/noticias-card.component';
import { NoticiasTituloComponent } from './noticias-titulo/noticias-titulo.component';
import { ContactoCardInfoComponent } from './contacto-card-info/contacto-card-info.component';
import { ContactoCardFormularioContactoComponent } from './contacto-card-formulario-contacto/contacto-card-formulario-contacto.component';
import { DonacionFormularioDonacionComponent } from './donacion-formulario-donacion/donacion-formulario-donacion.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProyectosComponent,
    VoluntariosComponent,
    NoticiasComponent,
    ContactoComponent,
    DonacionComponent,
    ProyectosBigFotoComponent,
    ProyectosTextoComponent,
    VoluntariosNuestraMisionComponent,
    VoluntariosComoAyudarComponent,
    VoluntariosCitaBiblicaComponent,
    VoluntariosBotonDonacionComponent,
    NoticiasCardComponent,
    NoticiasTituloComponent,
    ContactoCardInfoComponent,
    ContactoCardFormularioContactoComponent,
    DonacionFormularioDonacionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
