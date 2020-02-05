import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficabarrasComponent } from './components/graficabarras/graficabarras.component';
import { GraficabarrashComponent } from './components/graficabarrash/graficabarrash.component';
import { GraficapieComponent } from './components/graficapie/graficapie.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "analiticas", component: HomeComponent },
  { path: "analiticas/grafica_barras", component: GraficabarrasComponent },
  { path: "analiticas/grafica_barrash", component: GraficabarrashComponent },
  { path: "analiticas/grafica_pie", component: GraficapieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AnaliticasRoutingModule { }
