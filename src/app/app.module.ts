import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BodyComponent } from './menu/body/body.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { ProdutosComponent } from './menu/produtos/produtos.component';
import { EstatisticaComponent } from './menu/estatistica/estatistica.component';
import { CulponsComponent } from './menu/culpons/culpons.component';
import { PagesComponent } from './menu/pages/pages.component';
import { MidiaComponent } from './menu/midia/midia.component';
import { DefinicaoComponent } from './menu/definicao/definicao.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { EfectuarOcorrenciaComponent } from './menu/produtos/efectuar-ocorrencia/efectuar-ocorrencia.component';
import { EmprestimoComponent } from './menu/produtos/emprestimo/emprestimo.component';
import { CaixaComponent } from './menu/produtos/caixa/caixa.component';
import { GestaoDocumentalComponent } from './menu/produtos/gestao-documental/gestao-documental.component';
import { RecepcaoVisitaComponent } from './menu/produtos/recepcao-visita/recepcao-visita.component';
import { TratamentoTrabalhoComponent } from './menu/produtos/tratamento-trabalho/tratamento-trabalho.component';
import { SupervisaoTrabalhoComponent } from './menu/produtos/supervisao-trabalho/supervisao-trabalho.component';
import { GereciametoAdministrativoComponent } from './menu/produtos/gereciameto-administrativo/gereciameto-administrativo.component';
import { GereciametoSocialComponent } from './menu/produtos/gereciameto-social/gereciameto-social.component';
import { AjudaHumanitariaComponent } from './menu/produtos/ajuda-humanitaria/ajuda-humanitaria.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProdutosComponent,
    EstatisticaComponent,
    CulponsComponent,
    PagesComponent,
    MidiaComponent,
    DefinicaoComponent,
    DashboardComponent,
    EfectuarOcorrenciaComponent,
    EmprestimoComponent,
    CaixaComponent,
    GestaoDocumentalComponent,
    RecepcaoVisitaComponent,
    TratamentoTrabalhoComponent,
    SupervisaoTrabalhoComponent,
    GereciametoAdministrativoComponent,
    GereciametoSocialComponent,
    AjudaHumanitariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
