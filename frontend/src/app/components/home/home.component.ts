import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductModelServer, serverResponse } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts(8).subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products)
    })
  }

  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }

}
