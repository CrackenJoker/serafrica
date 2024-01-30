import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BodyComponent } from './menu/body/body.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { EstatisticaComponent } from './menu/estatistica/estatistica.component';
import { CulponsComponent } from './menu/culpons/culpons.component';
import { PagesComponent } from './menu/pages/pages.component';
import { MidiaComponent } from './menu/midia/midia.component';
import { DefinicaoComponent } from './menu/definicao/definicao.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    EstatisticaComponent,
    CulponsComponent,
    PagesComponent,
    MidiaComponent,
    DefinicaoComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
