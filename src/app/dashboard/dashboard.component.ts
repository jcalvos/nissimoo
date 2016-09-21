import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { Product } from '../model/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productService : ProductService){}

  ngOnInit(){
    this.productService.getAll()
      .then(products => console.log(products));

    this.productService.getById(6261023365)
      .then(product => console.log(product));


    let new_product = new Product('Test Product', 'T-Shirt', 'Nissimoo');
    this.productService.create(new_product).then(product => console.log(product));
  }

}
