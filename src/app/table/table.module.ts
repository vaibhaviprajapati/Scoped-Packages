import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaibhaviTableComponent } from './vaibhavi-table/vaibhavi-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VaibhaviTableComponent],
  exports: [VaibhaviTableComponent]
})
export class TableModule { }
