import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
    pageBreadcrumb = "Android Training";
   pageTitle = "Android Training Overview";
  constructor() { }

  ngOnInit() {
  }

}