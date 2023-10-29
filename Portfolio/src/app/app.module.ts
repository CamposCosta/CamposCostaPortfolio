import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialPageComponent } from 'src/views/inicial-page/inicial-page.component';
import { AboutPageComponent } from '../views/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
