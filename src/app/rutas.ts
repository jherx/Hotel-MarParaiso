import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/home/body/body.component';
import { RegistrosComponent } from './components/forms/registros/registros.component';
import { ContactoComponent } from './components/forms/contacto/contacto.component';

const APP_ROUTES: Routes = [

{path: 'HMP-HOME', component: HomeComponent},
{path: 'BUDY', component: BodyComponent},
{path: 'registro', component: RegistrosComponent},
{path: 'contactoAdmin', component: ContactoComponent},
{path: '**', pathMatch: 'full', redirectTo: 'HMP-HOME'}

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],

exports: [RouterModule]
})
export class AppRoutingModule { }
