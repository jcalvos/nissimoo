var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
export var DashboardComponent = (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.productService.getAll()
            .then(function (products) { return console.log(products); });
        this.productService.getById(6261023365)
            .then(function (product) { return console.log(product); });
        var new_product = new Product('Test Product', 'T-Shirt', 'Nissimoo');
        this.productService.create(new_product).then(function (product) { return console.log(product); });
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }), 
        __metadata('design:paramtypes', [ProductService])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=../../../../src/app/dashboard/dashboard.component.js.map