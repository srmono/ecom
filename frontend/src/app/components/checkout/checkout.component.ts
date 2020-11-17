import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModelServer } from '../../models/cart.model';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe((data) => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  onCheckout() {
    this.spinner.show(undefined,
      {
        type: 'square-spin',
        size: 'medium',
        bdColor: 'rgba(100,149,237, .8)',
        color: 'white',
        fullScreen: false
      }
    );
    this.cartService.CheckoutFromCart(1); 
    setTimeout(() => this.spinner.hide(), 5000);
  }  

}
