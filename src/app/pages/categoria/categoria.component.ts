import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produto.service';
import { CardProdutoComponent } from '../../card-produto/card-produto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule],
  template: `
    <app-card-produto *ngFor="let item of listaDeProdutos" [produto]="item"></app-card-produto>
  `,
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  categoriaId = -1;

  listaDeProdutos: Produto[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  constructor(){
    this.categoriaId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(){
    this.produtoService.getListaDeProdutosByCategory(this.categoriaId).then( (lista: any) => { this.listaDeProdutos = lista.produtos} );
  }

}
