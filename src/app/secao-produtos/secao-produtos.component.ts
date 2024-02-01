import { Component, Input } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secao-produtos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule],
  template: `
    <section class="secao-produtos">
      <div class="topo">
        <label>Star Wars</label><a>Ver tudo</a>
      </div>
      <div class="lista-produtos">
        <app-card-produto *ngFor="let item of listaDeProdutos" [produto]="item"></app-card-produto>
      </div>
    </section>
  `,
  styleUrl: './secao-produtos.component.css'
})
export class SecaoProdutosComponent {
  @Input() cardProduto!: CardProdutoComponent;

  listaDeProdutos: Produto[] = [
    {
      id: 1,
      idCategory: 1,
      imageUrl: 'unsplash_6FDXGY9J6y4.png',
      name: 'Produto 1',
      price: 60,
    },
    {
      id: 2,
      idCategory: 2,
      imageUrl: 'unsplash_epRFE_hBNjo.png',
      name: 'Produto 2',
      price: 60,
    },
    {
      id: 1,
      idCategory: 1,
      imageUrl: 'unsplash_6FDXGY9J6y4.png',
      name: 'Produto 1',
      price: 60,
    },
    {
      id: 2,
      idCategory: 2,
      imageUrl: 'unsplash_epRFE_hBNjo.png',
      name: 'Produto 2',
      price: 60,
    },
    {
      id: 1,
      idCategory: 1,
      imageUrl: 'unsplash_6FDXGY9J6y4.png',
      name: 'Produto 1',
      price: 60,
    },
    {
      id: 2,
      idCategory: 2,
      imageUrl: 'unsplash_epRFE_hBNjo.png',
      name: 'Produto 2',
      price: 60,
    }
  ];
}
