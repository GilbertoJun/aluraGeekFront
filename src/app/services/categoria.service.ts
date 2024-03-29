import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  url = 'http://localhost:8080/categorias';

  async getListaDeCategoriasComProdutos(): Promise<Categoria[]> {
    const data = await fetch(this.url + '?somenteComProduto=1');
    return await data.json() ?? [];
  }

  async getDetalhesCategoria(idCategoria: number): Promise<Categoria> {
    const data = await fetch('http://localhost:8080/categoria/' + idCategoria);
    return await data.json() ?? {};
  }

}
