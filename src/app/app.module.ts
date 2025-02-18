//se declaran todos los componentes, servicios y módulos que utilizan
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DonacionComponent } from './donacion/donacion.component';
import { ProyectosBigFotoComponent } from './proyectos-big-foto/proyectos-big-foto.component';
import { ProyectosTextoComponent } from './proyectos-texto/proyectos-texto.component';
import { VoluntariosNuestraMisionComponent } from './voluntarios-nuestra-mision/voluntarios-nuestra-mision.component';
import { VoluntariosComoAyudarComponent } from './voluntarios-como-ayudar/voluntarios-como-ayudar.component';
import { VoluntariosCitaBiblicaComponent } from './voluntarios-cita-biblica/voluntarios-cita-biblica.component';
import { VoluntariosBotonDonacionComponent } from './voluntarios-boton-donacion/voluntarios-boton-donacion.component';
import { ContactoCardInfoComponent } from './contacto-card-info/contacto-card-info.component';
import { ContactoCardFormularioContactoComponent } from './contacto-card-formulario-contacto/contacto-card-formulario-contacto.component';
import { DonacionFormularioDonacionComponent } from './donacion-formulario-donacion/donacion-formulario-donacion.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaIndividualComponent } from './noticia-individual/noticia-individual.component';
import { RescatadosComponent } from './rescatados/rescatados.component';
import { RescatadosModificarComponent } from './rescatados-modificar/rescatados-modificar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalDonacionComponent } from './modal-donacion/modal-donacion.component';
import { ModelContactoComponent } from './model-contacto/model-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProyectosComponent,
    VoluntariosComponent,
    ContactoComponent,
    DonacionComponent,
    ProyectosBigFotoComponent,
    ProyectosTextoComponent,
    VoluntariosNuestraMisionComponent,
    VoluntariosComoAyudarComponent,
    VoluntariosCitaBiblicaComponent,
    VoluntariosBotonDonacionComponent,
    ContactoCardInfoComponent,
    ContactoCardFormularioContactoComponent,
    DonacionFormularioDonacionComponent,
    LoginComponent,
    RegisterComponent,
    NoticiaComponent,
    NoticiaIndividualComponent,
    RescatadosComponent,
    RescatadosModificarComponent,
    ModalDonacionComponent,
    ModelContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
