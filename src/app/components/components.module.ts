import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SummaryModule
  ],
  exports: [SummaryModule]
})
export class ComponentsModule { }
