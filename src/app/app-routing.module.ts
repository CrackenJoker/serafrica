import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { EstatisticaComponent } from './menu/estatistica/estatistica.component';
import { ProdutosComponent } from './menu/produtos/produtos.component';
import { CulponsComponent } from './menu/culpons/culpons.component';
import { PagesComponent } from './menu/pages/pages.component';
import { MidiaComponent } from './menu/midia/midia.component';
import { DefinicaoComponent } from './menu/definicao/definicao.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'estatistica',component:EstatisticaComponent},
  {path:'produtos',component:ProdutosComponent},
  {path:'culpons',component:CulponsComponent},
  {path:'paginas',component:PagesComponent},
  {path:'midia',component:MidiaComponent},
  {path:'definicao',component:DefinicaoComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
