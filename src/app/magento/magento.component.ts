import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magento',
  templateUrl: './magento.component.html',
  styleUrls: ['./magento.component.css']
})
export class MagentoComponent implements OnInit {
  pageBreadcrumb = "Magento Training";
  pageTitle = "Magento Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
