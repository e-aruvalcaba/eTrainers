import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieComponent } from './components/pie/pie.component';
import { BarComponent } from './components/bar/bar.component';

const routes: Routes = [
  { path: "reportes/pie", component: PieComponent },
  { path: "reportes/bar", component: BarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
