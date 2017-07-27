import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-php',
  templateUrl: './cake-php.component.html',
  styleUrls: ['./cake-php.component.css']
})
export class CakePhpComponent implements OnInit {
   pageBreadcrumb = "Cake PHP Training";
   pageTitle = "Cake PHP Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
