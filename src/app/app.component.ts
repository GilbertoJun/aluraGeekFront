import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { HeroComponent } from './hero/hero.component';
import { SecaoProdutosComponent } from './secao-produtos/secao-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { Produto } from './interfaces/produto';
import { CommonModule } from '@angular/common'
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent, HeroComponent, SecaoProdutosComponent, CommonModule, RodapeComponent, RouterModule],
  template: `
    <app-topo></app-topo>
    <router-outlet></router-outlet>
    <app-rodape></app-rodape>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AluraGeek';




  // cardProduto: CardProdutoComponent = <app-card-produto [produto]="produto"></app-card-produto>
}
