import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { CursosresumenComponent } from './components/cursosresumen/cursosresumen.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "inicio", component: InicioComponent },
  { path: "cursos", component: CursosresumenComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "reportes/pie" || "reportes/bar", loadChildren: () => import("./components/reportes/reportes.module").then(m => m.ReportesModule)},
  { path: "register", redirectTo: "auth/register"},
  
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: "**", component: InicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
