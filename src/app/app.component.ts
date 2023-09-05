import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Boutique';

  constructor (private service:ProductService){}

  productList: Product[] = [];

  ngOnInit():void {
    this.getProduct
  }

  getProduct():Product[] {
    this.productList = this.service.fetchAllProduct();
    return this.productList;
  }
}
