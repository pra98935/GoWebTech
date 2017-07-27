import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrial-training',
  templateUrl: './industrial-training.component.html',
  styleUrls: ['./industrial-training.component.css']
})
export class IndustrialTrainingComponent implements OnInit {

  pageBreadcrumb = "Why Choose Us";
  pageTitle = "Industrial Training";

  constructor() { }

  ngOnInit() {
  }

}

