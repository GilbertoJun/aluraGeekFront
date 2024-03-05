import { CardProdutoComponent } from './../../componentes/card-produto/card-produto.component';
import { Produto } from './../../interfaces/produto';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CardProdutoComponent],
  template: `
    <div class="center bg-gray principal">
      <div class="container">
        <app-card-produto [produto]="product" [large]=true></app-card-produto>

      </div>

    </div>
  `,
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  produtoService: ProdutoService = inject(ProdutoService);
  product: Produto = {
    id: -1,
    idCategory: -1,
    imageUrl: "",
    name: "Loading",
    price: 0.0
  };
  produtoId = -1;

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
