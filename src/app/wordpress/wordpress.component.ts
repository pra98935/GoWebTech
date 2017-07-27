import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.css']
})
export class WordpressComponent implements OnInit {
  pageBreadcrumb = "Wordpress Training";
  pageTitle = "Wordpress Training Overviews";
  constructor() { }

  ngOnInit() {
  }

}
