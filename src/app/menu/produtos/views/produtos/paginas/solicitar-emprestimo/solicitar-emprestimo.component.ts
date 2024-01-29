import { Component } from '@angular/core';
import { dados } from '../../dados';
@Component({
  selector: 'app-solicitar-emprestimo',
  templateUrl: './solicitar-emprestimo.component.html',
  styleUrl: './solicitar-emprestimo.component.scss'
})
export class SolicitarEmprestimoComponent {
  dado=dados
}
