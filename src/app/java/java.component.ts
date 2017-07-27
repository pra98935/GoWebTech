import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  pageBreadcrumb = "Core JAVA Training";
  pageTitle = "JAVA Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
