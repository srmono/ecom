import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModelServer } from '../../models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: Number;

  constructor( public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    console.log("cart data::::", this.cartData);
    console.log("cart total*****", this.cartTotal)
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data)
  }

}
