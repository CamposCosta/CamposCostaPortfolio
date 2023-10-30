import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialPageComponent } from 'src/views/inicial-page/inicial-page.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { FormsModule } from '@angular/forms';
import { WorkPageComponent } from '../views/work-page/work-page.component';// Importe o ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    InicialPageComponent,
    WorkPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
