import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


const nissimooUrl = 'https://nissimo-app.herokuapp.com';

@Injectable()
export class ShopifyService {

  constructor(private http : Http) { }

  get(endpoint, params, data){
    let url = nissimooUrl + endpoint;
    if( params !== null){
      url += '?' + params;
    }
    return this.makeRequest(url,'GET',data);
  };


  post(endpoint, params, data){
    let url = nissimooUrl + endpoint;
    if( params !== null){
      url += '?' + params;
    }
    return this.makeRequest(url,'POST',data);
  };

  makeRequest(endpoint, method, data) {
    var headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    });
    var args = new RequestOptions({
      method: method,
      headers: headers,
      body: data
    });
    return this.http.request(endpoint, args)
      .toPromise()
      .then(
        response => response.json()
      )
      .catch(this.handleError);
  };

  private handleError(error : any): Promise<any> {
    console.error('An error ocurred calling Shopify', error);
    return Promise.reject(error.message || error);
  }
}
