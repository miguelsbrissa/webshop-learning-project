import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGH: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGH[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) {}

  onColumnsCountChanged(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGH[this.cols];
  }
  onShowCategory(newCategory: string) {
    this.category = newCategory;
  }
  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.priice,
      quantity: 1,
      id: product.id,
    });
  }
}
