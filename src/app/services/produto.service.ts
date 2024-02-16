import { Injectable } from '@angular/core';
import { Produto } from '../produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  getListaDeProdutos(): Produto[] {
    return this.listaDeProdutos;
  }

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

  constructor() { }
}
