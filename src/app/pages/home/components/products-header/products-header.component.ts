import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() itemsCountChange = new EventEmitter<number>();

  sort = "desc";
  itemsShowCount = 12;

  onSortUpdated(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onColumnsUpdated(colsNumber: number) {
    this.columnsCountChange.emit(colsNumber);
  }
}
