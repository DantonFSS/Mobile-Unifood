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
      image: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
    },
    {
      name: 'Hambúrguer',
      description: 'Hambúrguer artesanal com batatas fritas',
      price: 20,
      quantity: 1,
      image: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2024/05/TTBurger_021_Alta_CredTomasRangel-1.jpg?w=1024',
    },
  ];

  get totalAmount() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  checkout() {
    alert('Finalizando compra...');
  }
}
