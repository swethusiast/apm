import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct;
  errorMessage;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      const productId = +id;
      this.getProduct(productId);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => (this.product = product),
      error: err => (this.errorMessage = err),
    });
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
