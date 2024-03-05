import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <div class="container topo">
        <div class="container__direita">
          <a [routerLink]="['']" ><img class="" src="/assets/logo.png" alt="logo"></a>
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
