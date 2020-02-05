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
import { NbSidebarService } from '@nebular/theme';
import { AnaliticasModule } from './components/analiticas/analiticas.module';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UsuariosComponent,
    CursosresumenComponent,
    InicioComponent,
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