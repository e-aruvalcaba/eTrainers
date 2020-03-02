import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule, NbContextMenuModule, NbRouteTabsetModule, NbSidebarModule, NbIconModule, NbSearchModule, NbActionsModule, NbSelectModule, NbUserModule, NbMenuModule, NbSidebarService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatSidenavModule, MatSelectModule, MatInputModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import es from '@angular/common/locales/es-MX';
import { PiechartComponent } from 'src/app/components/piechart/piechart.component';
import { BarchartComponent } from 'src/app/components/barchart/barchart.component';
import { LinechartComponent } from 'src/app/components/linechart/linechart.component';
import { ChartsComponent } from 'src/app/components/charts/charts.component';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';

registerLocaleData(es);
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    // NbThemeModule.forRoot({ name: 'custom' }),
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
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: "data.token"
          },
          baseEndpoint: "http://localhost:53258", //only for test purposes
          login: {
            endpoint: "/api/login/authenticate",
            redirect: {
              success: "/inicio",
              failure: "/"
            }
          }
        }),
      ],
      forms: {},
    }), 
  ],
  exports: [
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    ChartsComponent,
    NgbCollapseModule,
    BrowserAnimationsModule,
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbTabsetModule,
    NbCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    NbContextMenuModule,
    NbRouteTabsetModule,
    NbSidebarModule,
    // ngx-translate and the loader module
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSearchModule,
    NbActionsModule,
    NbSelectModule,
    NbUserModule,
    ChartModule,
    NbMenuModule,
    TranslateModule,
    NbAuthModule,
  ],
  providers: [NbSidebarService, { provide: LOCALE_ID, useValue: 'es-MX' }]
})
export class CoreModule {

  static forRoot(){
    return {
      NgModule: CoreModule,
      providers:[NbSidebarService, { provide: LOCALE_ID, useValue: 'es-MX' }]
    };
  }
}
