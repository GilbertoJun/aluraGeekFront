import { ProdutoService } from './../services/produto.service';
import { Produto } from './../produto';
import { Component, Input, Inject, inject } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secao-produtos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, RouterModule],
  template: `
    <section class="secao-produtos">
      <div class="topo">
        <label class="weight-700">Star Wars</label><a class="weight-700 color-azul" [routerLink]="['/nathanbaitola']"><span>Ver tudo</span> <img src="/assets/seta.png"></a>
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

  listaDeProdutos : Produto[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  constructor() {
    this.listaDeProdutos = this.produtoService.getListaDeProdutos();
    console.log(this.listaDeProdutos);
  }


}
