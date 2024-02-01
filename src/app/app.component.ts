import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { HeroComponent } from './hero/hero.component';
import { SecaoProdutosComponent } from './secao-produtos/secao-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { Produto } from './produto';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent, HeroComponent, SecaoProdutosComponent, CommonModule],
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
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aluraGeek';




  // cardProduto: CardProdutoComponent = <app-card-produto [produto]="produto"></app-card-produto>
}
