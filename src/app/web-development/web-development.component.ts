import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  pageBreadcrumb = "Web Development";
  pageTitle = "Web Development";

  constructor() { }

  ngOnInit() {
  }

}
