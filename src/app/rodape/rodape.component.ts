import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  template: `
   <footer class="center">
      <div class="formularo-rodape center">
        <div class="container">
          <img src="/assets/logo.png">
          <ul>
            <li><a>Quem somos nós</a></li>
            <li><a>Política de privacidade</a></li>
            <li><a>Programa fidelidade</a></li>
            <li><a>Nossas lojas</a></li>
            <li><a>Quero ser franqueado</a></li>
            <li><a>Anuncie aqui</a></li>
          </ul>
        </div>
      </div>
      <div class=""></div>
   </footer>
  `,
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
