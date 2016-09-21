import { ProductDetails } from './product-details';
export var Product = (function () {
    function Product(title, product_type, vendor) {
        this.product = new ProductDetails();
        this.product.title = title;
        this.product.product_type = product_type;
        this.product.vendor = vendor;
    }
    return Product;
}());
//# sourceMappingURL=../../../../src/app/model/product.js.map