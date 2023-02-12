import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FirsComponentComponent } from './components/firs-component/firs-component.component';
import { HomeLucasModule } from './home-lucas/home-lucas.module';
import { HomeTiagoModule } from './home-tiago';
//import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FirsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HomeLucasModule,
    HomeTiagoModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
