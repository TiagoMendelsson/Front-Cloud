import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucaspageComponent } from './lucaspage/lucaspage.component';



@NgModule({
  declarations: [
    LucaspageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LucaspageComponent
  ]
})
export class HomeLucasModule { }
