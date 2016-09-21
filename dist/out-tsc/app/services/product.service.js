var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShopifyService } from './shopify.service';
import 'rxjs/add/operator/toPromise';
export var ProductService = (function () {
    function ProductService(http, shopifyService) {
        this.http = http;
        this.shopifyService = shopifyService;
        this.url = '';
    }
    ProductService.prototype.getAll = function () {
        return this.shopifyService.get('/get', 'endpoint=/admin/products.json', null);
    };
    ProductService.prototype.getById = function (id) {
        return this.shopifyService.get('/get', 'endpoint=/admin/products/' + id + '.json', null);
    };
    ProductService.prototype.create = function (product) {
        return this.shopifyService.post('/post', 'endpoint=/admin/products.json', product);
    };
    ProductService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, ShopifyService])
    ], ProductService);
    return ProductService;
}());
//# sourceMappingURL=../../../../src/app/services/product.service.js.map