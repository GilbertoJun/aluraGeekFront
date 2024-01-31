import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { HeroComponent } from './hero/hero.component';
import { SecaoProdutosComponent } from './secao-produtos/secao-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent, HeroComponent, SecaoProdutosComponent, CardProdutoComponent],
  template: `
    <app-topo></app-topo>
    <app-hero></app-hero>
    <div class="center">
      <div class="container">
        <app-secao-produtos>

        </app-secao-produtos>

        <app-card-produto *ngFor="let produto of listaDeProdutos" [produto]="produto">
        </app-card-produto>

        <app-card-produto [produto]="produtoTeste"></app-card-produto>
        <!-- <app-card-produto [produto]="produto"></app-card-produto> -->
      </div>
    </div>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aluraGeek';

  produtoTeste: Produto = {
    id: 5,
    idCategory: 1,
    imageUrl: 'Imagem 1',
    name: 'Produto 1',
    price: 60,
  }

  listaDeProdutos: Produto[] = [
    {
      id: 1,
      idCategory: 1,
      imageUrl: 'Imagem 1',
      name: 'Produto 1',
      price: 60,
    },
    {
      id: 2,
      idCategory: 2,
      imageUrl: 'Imagem 2',
      name: 'Produto 2',
      price: 60,
    }
  ];

  // cardProduto: CardProdutoComponent = <app-card-produto [produto]="produto"></app-card-produto>
}
