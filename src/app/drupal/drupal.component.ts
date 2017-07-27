import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drupal',
  templateUrl: './drupal.component.html',
  styleUrls: ['./drupal.component.css']
})
export class DrupalComponent implements OnInit {
    pageBreadcrumb = "Drupal Training";
   pageTitle = "Drupal Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
