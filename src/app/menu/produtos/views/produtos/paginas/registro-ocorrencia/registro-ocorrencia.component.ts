import { Component } from '@angular/core';
import { dados } from '../../dados';
@Component({
  selector: 'app-registro-ocorrencia',
  templateUrl: './registro-ocorrencia.component.html',
  styleUrl: './registro-ocorrencia.component.scss'
})
export class RegistroOcorrenciaComponent {
  dados=dados
  pesquisa:boolean=false
  comportamento():void{
    this.pesquisa=!this.pesquisa
  }
}
