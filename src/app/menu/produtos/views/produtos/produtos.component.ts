import { Component } from '@angular/core';
import { dadosAdmin } from './administracao';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  dadosAdmin=dadosAdmin
}
