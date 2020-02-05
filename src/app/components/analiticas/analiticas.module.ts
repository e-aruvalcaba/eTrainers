import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficabarrasComponent } from './components/graficabarras/graficabarras.component';
import { GraficabarrashComponent } from './components/graficabarrash/graficabarrash.component';
import { GraficapieComponent } from './components/graficapie/graficapie.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { AnaliticasRoutingModule } from './analiticas-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    GraficabarrasComponent, 
    GraficabarrashComponent, 
    GraficapieComponent, HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    AnaliticasRoutingModule
  ]
})
export class AnaliticasModule { }
