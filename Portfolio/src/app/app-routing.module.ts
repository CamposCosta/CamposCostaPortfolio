import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from 'src/app/views/inicial-page/inicial-page.component';
import { WorkPageComponent } from 'src/app/views/work-page/work-page.component';
import { CoverPageComponent } from 'src/app/views/cover-page/cover-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';

const routes: Routes = [
  { path: '',redirectTo: 'cover-page', pathMatch: 'full' },
  { path: 'cover-page', component: CoverPageComponent,},
  { path: 'inicial-page', component: InicialPageComponent,},
  { path: 'work-page', component: WorkPageComponent,},
  { path: 'about-page', component: AboutPageComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
