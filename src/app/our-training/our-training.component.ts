import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-training',
  templateUrl: './our-training.component.html',
  styleUrls: ['./our-training.component.css']
})
export class OurTrainingComponent implements OnInit {
  pageBreadcrumb = "Angular JS Training";
  pageTitle = "Angular JS Training Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
