import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/produto';
import { Component, Input, Inject, inject } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-secao-produtos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, RouterModule],
  template: `
    <section class="secao-produtos">
      <div class="topo">
        <label class="weight-700">{{produtosSimilares ? "Produtos Similares" : categoria.categoryName}}</label><a class="weight-700 color-azul" [routerLink]="['/categoria/' + categoria.id]" *ngIf="!produtosSimilares"><span>Ver tudo</span> <img src="/assets/seta.png"></a>
      </div>
      <div class="lista-produtos">
        <app-card-produto *ngFor="let item of listaDeProdutos | slice:0:6" [produto]="item"></app-card-produto>
      </div>
    </section>
  `,
  styleUrl: './secao-produtos.component.css'
})
export class SecaoProdutosComponent {
  @Input() categoria !: Categoria ;
  @Input() produtosSimilares !: Boolean ;

  listaDeProdutos : Produto[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  constructor() {
    // this.produtoService.getListaDeProdutosByCategory(this.categoria.id).then((resposta: any) => {
    //   console.log(this.listaDeProdutos)
    //   console.log(resposta)
    //   this.listaDeProdutos = resposta.produtos;

    // });
  }

  ngOnInit(){

    this.produtoService.getListaDeProdutosByCategory(this.categoria.id).then((resposta: any) => {
      console.log(this.listaDeProdutos)
      console.log(resposta)
      console.log("Qualquer string")
      this.listaDeProdutos = resposta.produtos;

    });
  }


}
