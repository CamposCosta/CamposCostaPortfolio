import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from 'src/app/views/inicial-page/inicial-page.component';
import { WorkPageComponent } from 'src/app/views/work-page/work-page.component';

const routes: Routes = [
  { path: '',redirectTo: 'inicial-page', pathMatch: 'full' },
  { path: 'inicial-page', component: InicialPageComponent,},
  { path: 'work-page', component: WorkPageComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
