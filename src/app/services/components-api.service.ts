import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsApiService {

  private cartData = new BehaviorSubject([])

  private totalAmountData = new BehaviorSubject(0)

  private totalItemsData = new BehaviorSubject(0)

  private cartList:any = []


  constructor() { }

  setCartData = (item:any) => {
    let product = {}
    let index = this.cartList.findIndex((e:any) => e.id === item.id)
    if(index != -1){
      this.cartList[index].quantity += 1
      this.cartData.next(this.cartList)
    }else{
      product = {...item, quantity: 1}
      this.cartList.push(product)
      this.cartData.next(this.cartList)
    }
    this.setTotalAmount()
    this.setTotalItems()
  }

  getCartData = () => this.cartData.asObservable()

  setQuantity = (id:number, action:string) => {
    if(action === 'increase'){
      this.cartList[this.cartList.findIndex((e:any) => e.id === id)].quantity += 1
    }else{
      this.cartList[this.cartList.findIndex((e:any) => e.id === id)].quantity -= 1
    }
    this.cartData.next(this.cartList)
    this.setTotalAmount()
    this.setTotalItems()
  }

  removeCartData = (id:number) => {
    let index = this.cartList.findIndex((e:any) => e.id === id)
    this.cartList.splice(index,1)
    this.cartData.next(this.cartList)
    this.setTotalAmount()
    this.setTotalItems()
  }

  emptyCartData = () => {
    this.cartList = []
    this.cartData.next(this.cartList)
    this.totalAmountData.next(0)
    this.totalItemsData.next(0)
  }

  setTotalAmount = () => {
    let amount = 0
    this.cartList.map((item:any) => amount += item.quantity * item.price)
    amount = Math.round(amount * 100)/100
    this.totalAmountData.next(amount)
  }

  getTotalAmount = () => this.totalAmountData.asObservable()

  setTotalItems = () => {
    let itemNo = 0
    this.cartList.map((item:any) => itemNo += item.quantity)
    this.totalItemsData.next(itemNo)
  }
  
  getTotalItems = () => this.totalItemsData.asObservable()

}
