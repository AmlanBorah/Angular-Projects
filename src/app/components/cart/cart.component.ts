import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ComponentsApiService } from 'src/app/services/components-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData:any = []
  totalAmount:number = 0
  delete = faTrash
  plus = faPlusCircle
  minus = faMinusCircle
  
  constructor(private componentApi: ComponentsApiService) { }

  ngOnInit(): void {
    this.componentApi.getCartData().subscribe(items => this.cartData = items)
    this.componentApi.getTotalAmount().subscribe(amount => this.totalAmount = amount)
  }

  changeQuantity = (id:number, action:string) => this.componentApi.setQuantity(id, action)

  emptyCart = () => this.componentApi.emptyCartData()

  removeItem = (id:number) => this.componentApi.removeCartData(id) 

  checkQuantity = (q:number) => q<2

}
