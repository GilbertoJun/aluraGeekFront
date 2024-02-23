import { Categoria } from './../../interfaces/categoria';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produto.service';
import { CardProdutoComponent } from '../../componentes/card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { SecaoProdutosComponent } from '../../componentes/secao-produtos/secao-produtos.component';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, SecaoProdutosComponent],
  template: `
    <div class="center d-flex bg-gray">
      <div class="container d-flex flex-column gap-30 mt-20 ">
        <h1>{{categoria.categoryName}}</h1>
        <div class="lista-produtos">
          <app-card-produto *ngFor="let item of listaDeProdutos" [produto]="item"></app-card-produto>
        </div>
      </div>
    </div>

  `,
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  categoriaId = -1;
  categoria: Categoria = {
    id: -1,
    categoryName: "Carregando.."
  };

  listaDeProdutos: Produto[] = [];
  produtoService: ProdutoService = inject(ProdutoService);
  categoriaService: CategoriaService = inject(CategoriaService);

  constructor(){
    this.categoriaId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(){
    this.produtoService.getListaDeProdutosByCategory(this.categoriaId).then( (lista: any) => { this.listaDeProdutos = lista.produtos} );
    this.categoriaService.getDetalhesCategoria(this.categoriaId).then( (categoria: any) => {
      console.log("oi Nathan");
      console.log(categoria)
      this.categoria = categoria} );
  }

}
