import { Categoria } from "./categoria";

export interface Produto {
  id: number;
  idCategory: number;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  category: Categoria;
}
