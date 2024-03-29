import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../componentes/hero/hero.component';
import { SecaoProdutosComponent } from '../../componentes/secao-produtos/secao-produtos.component';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SecaoProdutosComponent, CommonModule],
  template: `
    <app-hero></app-hero>
    <div class="center bg-gray principal">
      <div class="container grupo-secoes">
        <app-secao-produtos *ngFor="let item of listadeCategorias" [categoria]="item"></app-secao-produtos>
       </div>
     </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categoriaService: CategoriaService = inject(CategoriaService);
  listadeCategorias: Categoria[] = [];

  constructor(){
    this.categoriaService.getListaDeCategoriasComProdutos().then((listadeCategorias: Categoria[]) => {
      this.listadeCategorias = listadeCategorias;
    })
  }
}
