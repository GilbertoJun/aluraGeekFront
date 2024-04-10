import { CardProdutoComponent } from './../../componentes/card-produto/card-produto.component';
import { SecaoProdutosComponent } from '../../componentes/secao-produtos/secao-produtos.component';
import { Produto } from './../../interfaces/produto';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CardProdutoComponent, SecaoProdutosComponent, CommonModule],
  template: `
    <div class="center bg-gray principal">
      <div class="container d-flex flex-column gap-64">
        <div>
          <app-card-produto [produto]="product" [large]=true></app-card-produto>
        </div>
        <div>
          <app-secao-produtos *ngIf="product.category.id != -1" [categoria]="product.category" [produtosSimilares]=true></app-secao-produtos>
          <!-- Resolver produtos similares semelhante ao large de produto -->
          <!-- Remover "Ver tudo ->" -->
        </div>
      </div>

    </div>
  `,
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  produtoService: ProdutoService = inject(ProdutoService);

  categoria: Categoria = {
    id:-1,
    categoryName: "Produtos Similares"
  }

  product: Produto = {
    id: -1,
    idCategory: -1,
    imageUrl: "",
    name: "Loading",
    price: 0.0,
    description: "Example of description...",
    category: this.categoria
  };

  produtoId = -1;

  listaDeProdutos: Produto[] = [];

  constructor(){
    this.produtoId = Number(this.route.snapshot.params['id']);

  }

  ngOnInit(){
    this.produtoService.getProductById(this.produtoId).then((result) => {
      console.log("passed here")
      this.product = result;
    })
  }

}
