import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    pageBreadcrumb = "eCommerce Design & Development";
   pageTitle = "eCommerce Design ";
  constructor() { }

  ngOnInit() {
  }

}
