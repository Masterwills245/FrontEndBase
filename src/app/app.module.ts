import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/profesir/profesor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TutorComponent } from './component/tutor/tutor.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TutorComponent
  ],
  exports:[
    MatSidenavModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent, TutorComponent]
})
export class AppModule { }
