import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { BarComponent } from './components/bar/bar.component';
import { PieComponent } from './components/pie/pie.component';
import { BarchartComponent } from '../barchart/barchart.component';
import { CoreModule } from 'src/app/modules/core/core.module';


@NgModule({
  declarations: [
    BarComponent, 
    PieComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
