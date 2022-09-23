import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SummaryService } from './summary.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [SummaryService],
  exports: [SummaryComponent]
})
export class SummaryModule { }
