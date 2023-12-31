import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";
import { Environment } from "environment";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "shoes",
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };

  constructor(private cartService: CartService, private http: HttpClient) {}
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onClearCart() {
    this.cartService.clearCart();
  }
  onRemoveFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem) {
    this.cartService.removeQuantity(item);
  }
  onCheckout() {
    this.http
      .post("http://localhost:4242/checkout", {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(Environment.PRIVATE_KEY);
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
  ngOnInit() {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }
}
