import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
    tituloHeader: string = "Olá mundo! Primeira tipagem em ts"

    retornarTitulo() {
      return 'Peterson';
    }

    //Controla propriedade disabled do botao
    habilitarBotao:boolean = false;

    //Testando metodo para alterar botao
    alteraBotao() : boolean {
      if(this.habilitarBotao == true) {
          return this.habilitarBotao = false;
      }
      return this.habilitarBotao = true
    }
}
