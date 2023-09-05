import { Products } from './mock-products';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  fetchAllProduct(): Product[] {
    return Products;
  }
}
