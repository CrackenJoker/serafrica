import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { RegistroOcorrenciaComponent } from './paginas/registro-ocorrencia/registro-ocorrencia.component';
import { SolicitarEmprestimoComponent } from './paginas/solicitar-emprestimo/solicitar-emprestimo.component';
import { CaixaEmpresaComponent } from './paginas/caixa-empresa/caixa-empresa.component';
import { GestaoDocumentalComponent } from './paginas/gestao-documental/gestao-documental.component';
import { ReceberVisitaComponent } from './paginas/receber-visita/receber-visita.component';
import { AcidenteTrabalhoComponent } from './paginas/acidente-trabalho/acidente-trabalho.component';
import { SupervisionarTrabalhoComponent } from './paginas/supervisionar-trabalho/supervisionar-trabalho.component';
import { GestaoAdministrativaComponent } from './paginas/gestao-administrativa/gestao-administrativa.component';
import { AssuntosSociasComponent } from './paginas/assuntos-socias/assuntos-socias.component';
import { AjudaHumanitariaComponent } from './paginas/ajuda-humanitaria/ajuda-humanitaria.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    RegistroOcorrenciaComponent,
    SolicitarEmprestimoComponent,
    CaixaEmpresaComponent,
    GestaoDocumentalComponent,
    ReceberVisitaComponent,
    AcidenteTrabalhoComponent,
    SupervisionarTrabalhoComponent,
    GestaoAdministrativaComponent,
    AssuntosSociasComponent,
    AjudaHumanitariaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
