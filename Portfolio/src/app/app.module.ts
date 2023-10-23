import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialPageComponent } from 'src/views/inicial-page/inicial-page.component';
import { AboutPageComponent } from '../views/about-page/about-page.component';
import { ContactPageComponent } from '../views/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
