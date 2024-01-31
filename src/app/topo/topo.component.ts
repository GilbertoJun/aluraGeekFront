import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [],
  template: `
    <header>
      <div class="container topo">
        <div class="container__direita">
          <img class="" src="/assets/logo.png" alt="logo">
          <span class="iconeBusca">
            <input id="buscaPrincipal" class="buscador" placeholder="O que deseja encontrar?" type="search" />
          </span>
        </div>
        <button id="loginButton">Login</button>
      </div>
    </header>
  `,
  styleUrl: './topo.component.css'
})
export class TopoComponent {

}
