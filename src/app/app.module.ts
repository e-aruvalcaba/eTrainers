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
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    SearchComponent,
    SearchResultsComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ReportesModule,
    AnaliticasModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }