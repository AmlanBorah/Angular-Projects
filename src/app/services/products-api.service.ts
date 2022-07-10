import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  getProducts = () => this.http.get('https://whispering-inlet-26949.herokuapp.com/products')

  getProduct = (id:any) => this.http.get('https://whispering-inlet-26949.herokuapp.com/products/'+id)

}
