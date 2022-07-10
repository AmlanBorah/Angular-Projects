import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ComponentsApiService } from 'src/app/services/components-api.service';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any = []

  star = faStar

  constructor(private productApi: ProductsApiService, private route: ActivatedRoute, private componentApi: ComponentsApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => this.productApi.getProduct(params.get('id')).subscribe(item => this.product = item))
  }

  addProduct = (item:any) => this.componentApi.setCartData(item)

}
