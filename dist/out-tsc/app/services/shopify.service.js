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
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var nissimooUrl = 'http://localhost:3000';
export var ShopifyService = (function () {
    function ShopifyService(http) {
        this.http = http;
    }
    ShopifyService.prototype.get = function (endpoint, params, data) {
        var url = nissimooUrl + endpoint;
        if (params !== null) {
            url += '?' + params;
        }
        return this.makeRequest(url, 'GET', data);
    };
    ;
    ShopifyService.prototype.post = function (endpoint, params, data) {
        var url = nissimooUrl + endpoint;
        if (params !== null) {
            url += '?' + params;
        }
        return this.makeRequest(url, 'POST', data);
    };
    ;
    ShopifyService.prototype.makeRequest = function (endpoint, method, data) {
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var args = new RequestOptions({
            method: method,
            headers: headers,
            body: data
        });
        return this.http.request(endpoint, args)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ShopifyService.prototype.handleError = function (error) {
        console.error('An error ocurred calling Shopify', error);
        return Promise.reject(error.message || error);
    };
    ShopifyService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], ShopifyService);
    return ShopifyService;
}());
//# sourceMappingURL=../../../../src/app/services/shopify.service.js.map