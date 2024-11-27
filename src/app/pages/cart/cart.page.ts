import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems = [
    {
      name: 'Pizza Margherita',
      description: 'Pizza com molho de tomate e queijo',
      price: 30,
      quantity: 1,
      image: 'https://example.com/pizza.jpg',
    },
    {
      name: 'Hambúrguer',
      description: 'Hambúrguer artesanal com batatas fritas',
      price: 20,
      quantity: 1,
      image: 'https://example.com/burger.jpg',
    },
  ];

  get totalAmount() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  checkout() {
    alert('Finalizando compra...');
  }
}
