import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yii-framework',
  templateUrl: './yii-framework.component.html',
  styleUrls: ['./yii-framework.component.css']
})
export class YiiFrameworkComponent implements OnInit {
  pageBreadcrumb = "YII Framework Training";
  pageTitle = "YII Framework Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
