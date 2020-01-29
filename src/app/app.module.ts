import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabComponent, NbTabsetComponent, NbTabsetModule, NbCardModule, NbRouteTabsetComponent, NbRouteTabsetModule, NbSidebarModule, NbSearchService, NbSidebarService, NbIconModule, NbSearchModule, NbActionsModule, NbSelectModule, NbContextMenuModule, NbUserModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StartComponent } from './components/start/start.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule, MatSidenavModule, MatInputModule } from '@angular/material';
import { LinechartComponent } from './components/linechart/linechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
// import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { PiechartComponent } from './components/piechart/piechart.component';
// import { PolarareaComponent } from './components/polararea/polararea.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartModule } from 'angular2-chartjs';
// import { MatSelectModule } from '@angular/material/select';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTabsetModule,
    NbCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    NbContextMenuModule,
    NbRouteTabsetModule,
    NbSidebarModule.forRoot(),
    // ngx-translate and the loader module
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSearchModule,
    NbActionsModule,
    NbSelectModule,
    NbUserModule,
    ChartModule,
    NbMenuModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }