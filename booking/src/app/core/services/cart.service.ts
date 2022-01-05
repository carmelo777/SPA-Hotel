import { Injectable } from '@angular/core';
import { Cartitem } from 'src/app/model/cart-item';
import { Hotel, Room } from 'src/app/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Cartitem [] = [];
  constructor() { }

  addToCart(hotel: Hotel, room : Room){
    // this.items.push({
    //   hotel : hotel,
    //   room : room,
    //   creationDate : Date.now()
    // });
    this.items = [
      ...this.items, 
      {
      hotel : hotel,
      room : room,
      creationDate : Date.now()
    }
  ]
  }

  removedFromCart(cartItem: Cartitem){
    this.items =  this.items.filter(item => item.creationDate !== cartItem.creationDate)
  }

  proceeed() {
    window.alert(this.items.length);
  }
}
