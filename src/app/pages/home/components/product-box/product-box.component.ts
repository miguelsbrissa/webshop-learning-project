import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.module";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    title: "Snickers",
    priice: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
