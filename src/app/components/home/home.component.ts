import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ComponentsApiService } from 'src/app/services/components-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:any = []

  star = faStar

  constructor(private productsApi: ProductsApiService) { }

  ngOnInit(): void {
    this.productsApi.getProducts().subscribe(item => this.productList = item)
  }

}
