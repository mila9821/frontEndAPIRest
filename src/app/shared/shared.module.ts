import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { BlankComponent } from './blank/blank.component';





@NgModule({
  declarations: [
    SlidebarComponent,
    BlankComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    SlidebarComponent
  ]
})
export class SharedModule { }
