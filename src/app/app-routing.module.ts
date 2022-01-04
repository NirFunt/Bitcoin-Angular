import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './views/charts/charts.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
{path: 'contact/edit/:id', component:ContactEditComponent},
{path: 'contact/edit', component:ContactEditComponent},
{path: 'contact/:id', component:ContactDetailsComponent},
{path: 'contact', component:ContactComponent},
{path: 'charts', component:ChartsComponent},
{path: 'signup', component:SignupComponent},
{path: '', component:HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
