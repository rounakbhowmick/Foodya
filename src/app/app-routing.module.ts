import { ContactComponent } from './contact/contact.component';

import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  // {
  //   path: "", redirectTo: "home"
  // },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent]