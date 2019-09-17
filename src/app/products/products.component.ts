import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  constructor(private productService: ProductService) {}
  pageTitle = 'Products List';
  imageStyles: object = {
    width: '50px',
    margin: '2px',
  };
  showImage = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage = '';

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => (this.errorMessage = err),
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onNotify(message): void {
    this.pageTitle = `Products List: ${message}`;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      product =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1,
    );
  }
}
