import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { AcidenteTrabalhoComponent } from './paginas/acidente-trabalho/acidente-trabalho.component';
import { RegistroOcorrenciaComponent } from './paginas/registro-ocorrencia/registro-ocorrencia.component';
import { SolicitarEmprestimoComponent } from './paginas/solicitar-emprestimo/solicitar-emprestimo.component';
import { CaixaEmpresaComponent } from './paginas/caixa-empresa/caixa-empresa.component';
import { GestaoDocumentalComponent } from './paginas/gestao-documental/gestao-documental.component';
import { ReceberVisitaComponent } from './paginas/receber-visita/receber-visita.component';
import { SupervisionarTrabalhoComponent } from './paginas/supervisionar-trabalho/supervisionar-trabalho.component';
import { GestaoAdministrativaComponent } from './paginas/gestao-administrativa/gestao-administrativa.component';
import { AssuntosSociasComponent } from './paginas/assuntos-socias/assuntos-socias.component';
import { AjudaHumanitariaComponent } from './paginas/ajuda-humanitaria/ajuda-humanitaria.component';
const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'acidentes', component:AcidenteTrabalhoComponent },
  { path: 'ocorrencia', component:RegistroOcorrenciaComponent },
  { path: 'emprestimo', component:SolicitarEmprestimoComponent },
  { path: 'caixa', component:CaixaEmpresaComponent },
  { path: 'documental', component:GestaoDocumentalComponent },
  { path: 'recepcao', component:ReceberVisitaComponent },
  { path: 'supervisionar', component:SupervisionarTrabalhoComponent },
  { path: 'administrativo', component:GestaoAdministrativaComponent },
  { path: 'social', component:AssuntosSociasComponent },
  { path: 'solidariedade', component:AjudaHumanitariaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
