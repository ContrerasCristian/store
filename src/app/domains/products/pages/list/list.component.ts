import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  private categoriesService = inject(CategoryService)

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  addToCart(event: Product) {
    this.cartService.addToCart(event)
  }
  
  private getCategories(){
    this.categoriesService.getAll()
      .subscribe({
        next: (data) => {
          this.categories.set(data)
        }
      })
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      }
    })
  }
}
