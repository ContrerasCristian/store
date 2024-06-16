import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductComponent } from '../../components/product/product.component';

import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnChanges(changes: SimpleChanges): void {
      this.getProducts()
  }

  ngOnInit(): void {
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
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      }
    })
  }
}
