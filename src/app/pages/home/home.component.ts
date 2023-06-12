import { Component } from "@angular/core";

const ROWS_HEIGH: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGH[this.cols];
  category: string | undefined;
  onColumnsCountChanged(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGH[this.cols];
  }
  onShowCategory(newCategory: string) {
    this.category = newCategory;
  }
}
