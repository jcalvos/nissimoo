import { ProductDetails } from './product-details';

export class Product {
  product: ProductDetails = new ProductDetails();

  constructor(title, product_type, vendor){
    this.product.title = title;
    this.product.product_type = product_type;
    this.product.vendor = vendor;
  }
}
