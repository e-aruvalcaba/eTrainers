import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { CursosresumenComponent } from './components/cursosresumen/cursosresumen.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "cursos", component: CursosresumenComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "reportes/pie" || "reportes/bar", loadChildren: () => import("./components/reportes/reportes.module").then(m => m.ReportesModule)},
  { path: "**", component: InicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
