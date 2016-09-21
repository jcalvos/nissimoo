import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Product } from '../model/product';

import { ShopifyService} from './shopify.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
  private url = '';

  constructor(private http: Http, private shopifyService : ShopifyService) { }

  getAll () {
    return this.shopifyService.get('/get','endpoint=/admin/products.json', null);
  }

  getById (id: number ) {
    return this.shopifyService.get('/get','endpoint=/admin/products/' + id + '.json', null);
  }

  create(product : Product){
    return this.shopifyService.post('/post', 'endpoint=/admin/products.json', product);
  }

}
