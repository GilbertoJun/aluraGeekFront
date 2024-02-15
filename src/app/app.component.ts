import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { HeroComponent } from './hero/hero.component';
import { SecaoProdutosComponent } from './secao-produtos/secao-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { Produto } from './produto';
import { CommonModule } from '@angular/common'
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent, HeroComponent, SecaoProdutosComponent, CommonModule, RodapeComponent],
  template: `
    <app-topo></app-topo>
    <app-hero></app-hero>
    <div class="center">
      <div class="container">
        <app-secao-produtos></app-secao-produtos>
        <app-secao-produtos></app-secao-produtos>
        <app-secao-produtos></app-secao-produtos>

      </div>
    </div>
    <app-rodape></app-rodape>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AluraGeek';




  // cardProduto: CardProdutoComponent = <app-card-produto [produto]="produto"></app-card-produto>
}
