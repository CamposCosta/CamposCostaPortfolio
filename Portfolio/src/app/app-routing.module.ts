import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'src/views/about-page/about-page.component';
import { InicialPageComponent } from 'src/views/inicial-page/inicial-page.component';

const routes: Routes = [
  { path: '',redirectTo: 'inicial-page', pathMatch: 'full' },
  { path: 'inicial-page', component: InicialPageComponent,},
  { path: 'about-page', component: AboutPageComponent,},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
