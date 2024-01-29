import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { EstatisticaComponent } from './menu/estatistica/estatistica.component';
import { CulponsComponent } from './menu/culpons/culpons.component';
import { PagesComponent } from './menu/pages/pages.component';
import { MidiaComponent } from './menu/midia/midia.component';
import { DefinicaoComponent } from './menu/definicao/definicao.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'estatistica',component:EstatisticaComponent},
  {path:'culpons',component:CulponsComponent},
  {path:'paginas',component:PagesComponent},
  {path:'midia',component:MidiaComponent},
  {path:'definicao',component:DefinicaoComponent},
  { path: 'produtos', loadChildren: () => import('./menu/produtos/views/produtos/produtos.module').then(m => m.ProdutosModule) },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
