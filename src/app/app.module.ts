import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CursosresumenComponent } from './components/cursosresumen/cursosresumen.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReportesModule } from './components/reportes/reportes.module';
import { CoreModule } from './modules/core/core.module';
import { NbSidebarService, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { AnaliticasModule } from './components/analiticas/analiticas.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ReportesModule,
    AnaliticasModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }