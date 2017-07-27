import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zend-framework',
  templateUrl: './zend-framework.component.html',
  styleUrls: ['./zend-framework.component.css']
})
export class ZendFrameworkComponent implements OnInit {
  pageBreadcrumb = "Zend Framework Training";
  pageTitle = "Zend Framework Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
