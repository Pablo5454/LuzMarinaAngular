import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoCardFormularioContactoComponent } from './contacto-card-formulario-contacto/contacto-card-formulario-contacto.component';
import { ContactoCardInfoComponent } from './contacto-card-info/contacto-card-info.component';
import { DonacionComponent } from './donacion/donacion.component';
import { DonacionFormularioDonacionComponent } from './donacion-formulario-donacion/donacion-formulario-donacion.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { NoticiasCardComponent } from './noticias-card/noticias-card.component';
import { NoticiasTituloComponent } from './noticias-titulo/noticias-titulo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosBigFotoComponent } from './proyectos-big-foto/proyectos-big-foto.component';
import { ProyectosTextoComponent } from './proyectos-texto/proyectos-texto.component';
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { VoluntariosBotonDonacionComponent } from './voluntarios-boton-donacion/voluntarios-boton-donacion.component';
import { VoluntariosCitaBiblicaComponent } from './voluntarios-cita-biblica/voluntarios-cita-biblica.component';
import { VoluntariosComoAyudarComponent } from './voluntarios-como-ayudar/voluntarios-como-ayudar.component';
import { VoluntariosNuestraMisionComponent } from './voluntarios-nuestra-mision/voluntarios-nuestra-mision.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contacto', component:ContactoComponent, children:[
    {path: 'contacto-card-formulario-contacto', component:ContactoCardFormularioContactoComponent},
    {path: 'contacto-card-info', component:ContactoCardInfoComponent}
  ]},
  {path: 'donacion', component:DonacionComponent, children:[
    {path:'donacion-formulario-donacion', component:DonacionFormularioDonacionComponent}
  ]},
  {path: 'footer', component:FooterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'noticias', component:NoticiasComponent, children:[
    {path: 'noticias-card', component:NoticiasCardComponent},
    {path: 'noticias-titulo', component:NoticiasTituloComponent}
  ]},
  {path: 'proyectos', component:ProyectosComponent, children:[
    {path: 'proyectos-big-foto', component:ProyectosBigFotoComponent},
    {path: 'proyectos-texto', component:ProyectosTextoComponent}
  ]},
  {path: 'voluntarios', component:VoluntariosComponent, children:[
    {path: 'voluntarios-boton-donacion', component:VoluntariosBotonDonacionComponent},
    {path: 'voluntarios-cita-biblica', component:VoluntariosCitaBiblicaComponent},
    {path: 'voluntarios-como-ayudar', component:VoluntariosComoAyudarComponent},
    {path: 'voluntarios-nuestra-mision', component:VoluntariosNuestraMisionComponent}

  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
